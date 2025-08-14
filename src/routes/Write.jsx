import {useUser} from "@clerk/clerk-react";
import "react-quill-new/dist/quill.snow.css";
import ReactQuill from "react-quill-new";
const Write = () => {
  const { isLoaded, isSignedIn } = useUser();

  if (!isLoaded) {
    return <div className="">Loading...</div>
  }

   if (isLoaded && !isSignedIn) {
    return <div className="">You should login!</div>;
  }

  return (
    <div className='h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6'>
      <h1 className="text-cl font-light">Create a new Post</h1>
      <form className="flex flex-col gap-6 flex-1 mb-6">
        <button className="w-max p-2 shadow-md rounded-xl text-sm text-gray-500 bg-white">
                      Add a cover image
        </button>
        <input
          className="text-4xl font-semibold bg-transparent outline-none"
          type="text"
          placeholder="Your Plant's Story"
          name="title"
          />
        <div className="flex items-center gap-4">
          <label htmlFor="title"  className="text-sm">Pick a category:</label>
          <select
            name="category"
            id=""
            className="p-2 rounded-xl bg-white shadow-md"
          >
            <option value="selling">Selling</option>
            <option value="knowledge_sharing">Knowled sharing</option>
            <option value="fact">telling the fact</option>
            <option value="asking">asking</option>
            <option value="disease">disease</option>
            <option value="tutorial">how to +...</option>
          </select>
        </div>
         <textarea
          className="p-4 rounded-xl bg-white shadow-md"
          name="desc"
          placeholder="A Short Description"
        />
        <ReactQuill
            theme="snow"
            className="flex-1 rounded-xl bg-white shadow-md"
          />
          <button className="bg-green-800 text-white font-medium rounded-xl mt-4 p-2 w-36">Send</button>
      </form>
    </div>
  )
}

export default Write