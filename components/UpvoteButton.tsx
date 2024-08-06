"use client"
import { useState } from 'react';

const UpvoteButton: React.FC = () => {
  const [hasUpvoted, setHasUpvoted] = useState<boolean>(false);
  const [count, setCount] = useState<number>(135);

  const handleUpvote = () => {
    setHasUpvoted(!hasUpvoted);
    setCount(hasUpvoted ? count - 1 : count + 1);
  };

  return (
    <button
      onClick={handleUpvote}
      className={`flex items-center px-4 py-2 text-white bg-custocolor1 rounded hover:bg-customcolor2 transition-transform transform focus:outline-none ${hasUpvoted ? 'animate-upvote' : ''}`}
    >
      <span>{hasUpvoted ? 'UPVOTED' : 'UPVOTE'}</span>
      <span className="ml-2">{count}</span>

      <style jsx>{`
        @keyframes upvote {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0);
          }
        }
        .animate-upvote {
          animation: upvote 0.5s ease forwards;
        }
      `}</style>
    </button>
  );
};

export default UpvoteButton;
