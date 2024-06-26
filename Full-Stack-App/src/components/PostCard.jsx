import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";
function PostCard({ $id, title, featuredImage }) {
   // console.log($id,title,featuredImage)
   return (
      <Link to={`/post/${$id}`}>
         <div className="w-full bg-white border rounded-xl p-4">
            <div className="w-full justify-center mb-4">
               <img
                  src={appwriteService.getFilePreview(featuredImage)}
                  alt={title}
                  className="rounded-xl h-auto w-60"
               />
            </div>
            <h2 className="text-xl font-bold py-2">{title}</h2>
         </div>
      </Link>
   );
}

export default PostCard;
