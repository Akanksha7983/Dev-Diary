import React from 'react'

export default function About() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
    <div className='max-w-2xl mx-auto p-3 text-center mt-2'>
      <div>
        <h1 className='text-3xl font font-semibold text-center my-7'>
          About DevDiary
        </h1>
        <div className='text-md text-gray-500 flex flex-col gap-6'>
          <p>
          Welcome to DevDiary, your ultimate destination for sharing and discovering insightful
           notes on web development, software engineering,
           and programming languages. DevDiary was created with the mission of building a 
           collaborative platform where developers 
           of all levels can share their knowledge and learn from each other.
          </p>

          <p>
          At DevDiary, we believe in the power of collective learning and knowledge sharing. 
          Our platform allows users to post detailed notes, tutorials, and guides on a wide range
           of topics, from the latest trends in technology to deep dives into specific programming
            languages and frameworks. Whether you're a beginner just starting out or an experienced 
            developer looking to expand your expertise, you'll find valuable resources here.
          </p>

          <p>
            We encourage you to leave comments on our posts and engage with
            other readers. You can like other people's comments and reply to
            them as well. We believe that a community of learners can help
            each other grow and improve.
          </p>

          <p><strong><em>Happy Learning and Sharing!!</em></strong></p>
        </div>
      </div>
     </div>
     <img src="https://us.123rf.com/450wm/morphart/morphart2210/morphart221024894/193965954-design-notebook-illustration-vector-on-a-white-background.jpg?ver=6" alt='notesimg'>
        </img>
  </div>
);
}