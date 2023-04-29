import { useState, useEffect } from "react";
import { MdOutlineContentCopy } from "react-icons/md";
import { BsLink45Deg } from "react-icons/bs";
import { RxEnter } from "react-icons/rx";
import { TiTick } from "react-icons/ti";
import { Dna } from "react-loader-spinner";
import { useLazyGetSummaryQuery } from "../services/article";

const Demo = () => {
  
  const [ article, setArticle ] = useState({
    url: '',
    summary: '',
  }) 

  const [allArticles, setAllArticles] = useState([]);

  const [copy, setCopy] = useState("")

 // Custom hook to get the summary of the article using an API call
  const [getSummary, {error, isFetching}] = useLazyGetSummaryQuery()

  // Use effect hook to retrieve previously summarized articles from local storage
  useEffect(() => {
    const articlesFromLocalStorage = JSON.parse(localStorage.getItem('articles'));

    if (articlesFromLocalStorage) {
      setAllArticles(articlesFromLocalStorage);
    }
  }, [])
  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await getSummary({articleUrl: article.url})
// If a summary is obtained, update the state and store the article in local storage
    if (data?.summary) {
      const newArticle = {...article, summary: data.summary};
      setArticle(newArticle);
      const  updatedAllArticles = [newArticle, ...allArticles];
      setAllArticles(updatedAllArticles);
      localStorage.setItem('articles', JSON.stringify(updatedAllArticles));
    }
  }

  const handleCopy = (copyUrl) => {
    setCopy(copyUrl);
    navigator.clipboard.writeText(copyUrl);
    setTimeout(() => setCopy(false), 2000)
  }
// Render the component
  return (
    <section className="mt-10 max-w-2xl w-5/6 mx-auto">
      <div className="flex flex-col w-full gap-2">
        {/* Form to enter URL and get summary */}
        <form
          className="relative flex justify-center items-center"
          onSubmit={handleSubmit}
        >
          {/* Icon for the URL input field */}
          <BsLink45Deg className="absolute left-0 ml-3 w-5" />
          {/* URL input field */}
          <input
          className="block w-full rounded-md border border-gray-200 bg-white py-2.5 pl-10 text-sm shadow-lg focus:border-black focus:outline-none focus:ring-0"
            type="url"
            placeholder="Enter your URL"
            value={article.url}
            onChange={(e) => setArticle({ ...article, url: e.target.value })}
            required
          />
          {/* Button to submit the form */}
          <button
          className="hover:border-gray-700 hover:text-gray-700 absolute inset-y-0 right-0 my-1.5 mr-1.5 flex w-10 items-center justify-center rounded border border-gray-200  text-sm font-medium text-gray-400 "
          type="submit">
            <RxEnter />
          </button>
        </form>
        {/* List of all previously summarized articles */}
        <div className="flex flex-col gap-1 max-h-60 overflow-y-auto">
          {allArticles.map((item, index) => (
            <div
            key={`link-${index}`}
            onClick={() => setArticle(item)}
            className="flex items-center bg-white p-3 border shadow-lg border-gray-200 gap-3 rounded cursor-pointer">
              <div
              className="w-7 h-7 rounded-full bg-white shadow-xl cursor-pointer backdrop-blur flex justify-center items-center"
              onClick={() => handleCopy(item.url)}>
                {copy === item.url ? <TiTick /> : <MdOutlineContentCopy />}
              </div>
              <p className="text-sm hover:text-blue-600">{item.url}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Display summary results of specific article */}
      <div className="flex justify-center items-center max-w-full ">
            {isFetching ? (
              <Dna
              visible={true}
              height="80"
              width="80"
              ariaLabel="dna-loading"
              wrapperStyle={{}}
              wrapperClass="dna-wrapper"
            />
            ) : error ? (
              <p className="text-sm">Error! Please try again.
              <br />
              <span className="text-red-700">{error?.data?.error}</span></p>
            ) : (
              article.summary && (
                <div className="mb-3 flex flex-col p-3  gap-4 mt-3">
                  <h3 className="font-bold text-xl">SUMMARY</h3>
                  <p className="font-nunito text-sm">{article.summary}</p>
                </div>
              )
            ) }
      </div>
      
    </section>
  );
};

export default Demo;
