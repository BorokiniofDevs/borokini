import addPost from "@/lib/addPost";
import React from "react";

function Page() {
  return (
    <div>
      <form action={addPost}>
        <input type="text" placeholder="title" name="title" />
        <input type="text" placeholder="Desc" name="desc" />
        {/* <input type="file" placeholder="Image" name="img" /> */}
        <input type="text" placeholder="userId" name="userId" />
        <input type="text" placeholder="slug" name="slug" />
        <button>Create</button>
      </form>
    </div>
  );
}

export default Page;
