import React from 'react';

interface BlogPost {
  id: number;
  title: string;
  image: string;
  description: string;
  date: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Designing Modern Furniture',
    image: '/images/image copy 6.png',
    description: 'Explore the latest trends in modern furniture design.',
    date: 'December 10, 2024',
  },
  {
    id: 2,
    title: 'Top Home Décor Ideas',
    image: '/images/image copy 5.png',
    description: 'Transform your living space with these stunning home sofa ideas.',
    date: 'December 5, 2024',
  },
  {
    id: 3,
    title: 'How to Choose the Perfect sofa',
    image: '/images/image copy 7.png',
    description: 'Tips and tricks for finding the perfect sofa for your home.',
    date: 'November 28, 2024',
  },
];

const BlogPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Blog Page</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white shadow-lg rounded-lg p-4">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover rounded-md"
            />
            <h2 className="text-xl font-semibold mt-4">{post.title}</h2>
            <p className="text-black-500 mt-2">{post.date}</p>
            <p className="text-black-700 mt-4">{post.description}</p>
            <button className="mt-4 bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-500">
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
