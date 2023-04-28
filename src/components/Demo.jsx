import { useState, useEffect } from "react";
import { MdOutlineContentCopy } from "react-icons/md";
import { BsLink45Deg } from "react-icons/bs";
import { TiTick } from "react-icons/ti";
import { Dna } from "react-loader-spinner";
import { useLazyGetSummaryQuery } from "../services/article";

const Demo = () => {
  const [ article, setArticle ] = useState({
    url: '',
    summary: '',
  }) 

  const [getSummary, {error, isFetching}] = useLazyGetSummaryQuery()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await getSummary({articleUrl: article.url})

    if (data?.summary) {
      const newArticle = {...article, summary: data.summary};
      setArticle(newArticle);

      console.log(newArticle)
    }
  }

  return (
    <section className="mt-10  w-5/6 mx-auto max-w-lg">
      <div className="flex flex-col w-full gap-2">
        <form
          className="relative flex justify-center items-center"
          onSubmit={handleSubmit}
        >
          <BsLink45Deg className="absolute left-0 ml-3 w-5" />
          <input
          className="block w-full rounded-md border border-gray-200 bg-white py-2.5 pl-10 text-sm shadow-lg focus:border-black focus:outline-none focus:ring-0"
            type="url"
            placeholder="Enter your URL"
            value={article.url}
            onChange={(e) => setArticle({ ...article, url: e.target.value })}
            required
          />
          <button
          className="hover:border-gray-700 hover:text-gray-700 absolute inset-y-0 right-0 my-1.5 mr-1.5 flex w-10 items-center justify-center rounded border border-gray-200 font-sans text-sm font-medium text-gray-400 "
          type="submit">

          </button>
        </form>
      </div>
    </section>
  );
};

export default Demo;
