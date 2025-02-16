import { useState, useEffect } from 'react';
import NewsCard from './NewsCard';
import { Loader2 } from 'lucide-react';

interface Article {
  title: string;
  description: string;
  urlToImage: string;
  publishedAt: string;
  url: string;
  author: string;
  source: {
    name: string;
  };
}

interface ApiResponse {
  success: boolean;
  data: {
    totalResults: number;
    articles: Article[];
  };
  message?: string;
}

function AllNews() {
  const [data, setData] = useState<Article[]>([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const handlePrev = () => setPage(page - 1);
  const handleNext = () => setPage(page + 1);
  const pageSize = 12;

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    fetch(`https://aggregate-server.onrender.com/all-news`)
      .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
      })
      .then((myJson: ApiResponse) => {
        if (myJson.success) {
          setTotalResults(myJson.data.totalResults);
          setData(myJson.data.articles);
        } else {
          setError(myJson.message || 'An error occurred');
        }
      })
      .catch(error => {
        console.error('Fetch error:', error);
        setError('Failed to fetch news. Please try again later.');
      })
      .finally(() => setIsLoading(false));
  }, [page]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border-l-4 border-red-400 p-4 my-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-red-700">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((article, index) => (
          <NewsCard
            key={index}
            title={article.title}
            description={article.description}
            imgUrl={article.urlToImage}
            publishedAt={article.publishedAt}
            url={article.url}
            author={article.author}
            source={article.source.name}
          />
        ))}
      </div>

      {data.length > 0 && (
        <div className="flex items-center justify-center space-x-4 py-6">
          <button
            onClick={handlePrev}
            disabled={page <= 1}
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          <span className="text-sm text-gray-700">
            Page {page} of {Math.ceil(totalResults / pageSize)}
          </span>
          <button
            onClick={handleNext}
            disabled={page >= Math.ceil(totalResults / pageSize)}
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default AllNews;