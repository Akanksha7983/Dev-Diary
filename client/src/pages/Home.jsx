// import { Link } from 'react-router-dom';
// import CallToAction from '../components/CallToAction';
// import { useEffect, useState } from 'react';
// import PostCard from '../components/PostCard';

// export default function Home() {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       const res = await fetch('/api/post/getPosts');
//       const data = await res.json();
//       setPosts(data.posts);
//     };
//     fetchPosts();
//   }, []);

//   return (
//     <div>
//       <div className='flex flex-col'>
//       <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto '>
//       <h1 className='text-3xl font-bold lg:text-6xl'>Welcome to DevDiary</h1>
//       <p className='text-gray-500 text-xs sm:text-sm'>
//         Here you'll find a variety of articles and tutorials on topics such as
//         web development, software engineering, and programming languages.
//       </p>
//       <Link
//         to='/search'
//         className='text-xs sm:text-sm text-teal-500 font-bold hover:underline'
//       >
//         View all posts
//       </Link>
//     </div>
//        <div>
//        <img src="https://us.123rf.com/450wm/morphart/morphart2210/morphart221024894/193965954-design-notebook-illustration-vector-on-a-white-background.jpg?ver=6" alt='notesimg'>
//        </img>
//        </div>
//       </div>
//     <div className='p-3 bg-amber-100 dark:bg-slate-700'>
//       <CallToAction />
//     </div>

//     <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7'>
//       {posts && posts.length > 0 && (
//         <div className='flex flex-col gap-6'>
//           <h2 className='text-2xl font-semibold text-center'>Recent Posts</h2>
//           <div className='flex flex-wrap gap-4'>
//             {posts.map((post) => (
//               <PostCard key={post._id} post={post} />
//             ))}
//           </div>
//           <Link
//             to={'/search'}
//             className='text-lg text-teal-500 hover:underline text-center'
//           >
//             View all posts
//           </Link>
//         </div>
//       )}
//     </div>
//   </div>
// );
// }


import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';
import TypingEffect from '../components/TypingEffect';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/post/getPosts');
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);


  return (
    <div>
      <div className='flex flex-col'>
        <div className='flex flex-col lg:flex-row gap-6 p-28 px-3 max-w-6xl mx-auto'>
          <div className='flex flex-col gap-6'>
            <h1 className='text-3xl font-bold lg:text-5xl'>Welcome to <TypingEffect />
            
            </h1>
            <p className='text-gray-500 text-xs sm:text-sm'>
              Here you'll find a variety of articles and tutorials on topics such as
              web development,software engineering, and programming languages.
            </p>
            <Link
              to='/search'
              className='text-xs sm:text-sm text-teal-500 font-bold hover:underline'
            >
              View all articles
            </Link>
          </div>
          <div className='flex-shrink-0'>
            <img
              src='https://bestarion.com/wp-content/uploads/2021/03/Web-Developer.jpg'
              alt="developerimg"
              className='max-w-full lg:max-w-xs'
            />
          </div>
        </div>
      </div>
      {/* <div className='p-3 bg-amber-100 dark:bg-slate-700'>
        <CallToAction />
      </div> */}
      <div className='max-w-6xl mx-auto p-10 flex flex-col  gap-8 py-7'>
        {posts && posts.length > 0 && (
          <div className='flex flex-col gap-6'>
            <h2 className='text-2xl font-semibold text-center'>Recent Articles</h2>
            <div className='flex flex-wrap gap-10'>
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={'/search'}
              className='text-lg text-teal-500 hover:underline text-center'
            >
              View all articles
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

