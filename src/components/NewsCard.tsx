import { Calendar, User, Link as LinkIcon } from 'lucide-react';

interface NewsCardProps {
  title: string;
  imgUrl: string;
  description?: string;
  url: string;
  source: string;
  author: string;
  publishedAt: string;
}

const NewsCard = ({
  title,
  imgUrl,
  description,
  url,
  source,
  author,
  publishedAt,
}: NewsCardProps) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="aspect-w-16 aspect-h-9">
        <img
          src={imgUrl || 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'}
          alt={title}
          className="w-full h-48 object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3';
          }}
        />
      </div>
      
      <div className="p-4">
        <div className="mb-2">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-50 rounded-full">
            {source}
          </span>
        </div>
        
        <h2 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
          {title}
        </h2>
        
        {description && (
          <p className="text-gray-600 mb-4 line-clamp-3">
            {description}
          </p>
        )}

        <div className="border-t pt-4 mt-4">
          <div className="flex items-center text-sm text-gray-500 space-x-4">
            <div className="flex items-center">
              <User className="w-4 h-4 mr-1" />
              <span className="line-clamp-1">{author || 'Unknown Author'}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              <span>{formatDate(publishedAt)}</span>
            </div>
          </div>
          
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800"
          >
            <LinkIcon className="w-4 h-4 mr-1" />
            Read full article
          </a>
        </div>
      </div>
    </article>
  );
};

export default NewsCard;