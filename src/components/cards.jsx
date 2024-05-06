import React from 'react'

function Cards({name="", post="", username="", images=""}) {
    //console.log(props)
  return (
    <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
    <img
      alt=""
      src={images}
      className="h-56 w-full object-cover"
    />
  
    <div className="bg-white p-4 sm:p-6 text-blue-400">
      {name}
  
      <a href="#">
        <h3 className="mt-0.5 text-lg text-gray-900">
            {post}
        </h3>
      </a>
  
      <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
        pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem,
        mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque
        dignissimos. Molestias explicabo corporis voluptatem?
      </p>
     <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
     <svg
  className="size-4 text-indigo-700 rounded-full"
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  stroke="currentColor"
>
  <image href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxxZiag5WYo56M0x42EDYbHRcFSUrebXSg--UMf803Fg&s" width="100%" height="150%" />
</svg>

        <div className="mt-1.5 sm:mt-0">
          <p className="text-black">{username}</p>

          <p className="font-medium text-gray-600 flex items-center space-x-2 text-sm">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M6 3a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h4V3zm3 4V4a1 1 0 0 0-1-1 1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H9zm5 7H6a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1zm-3 2a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" clipRule="evenodd" />
  </svg>
  <span className="inline-block px-1 py-1 rounded-md">May 5</span>
  <span className="inline-block px- py-1 rounded-md">12:00 PM</span>
</p>
        </div>
      </div>
    </div>
  </article>
  )
}

export default Cards