import React, { useState, useEffect } from 'react'
import moment from 'moment'
import Link from 'next/link';
import { setRevalidateHeaders } from 'next/dist/server/send-payload';

import { GetRecentPosts } from '../services';

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setrelatedPosts] = useState([]);

  useEffect(() => {
    if(slug) {
      getSimilarPosts(category, slug)
          .then((result) => setrelatedPosts(result))
    } else {
      getRecentPosts()
          .then((result) => setrelatedPosts(result))
    }
  
    return () => {
      second
    }
  }, [third])
  
  return (
    <div>
      PostWidget
    </div>
  )
}

export default PostWidget