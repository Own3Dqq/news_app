import { Link } from "react-router-dom";

const Sidebar = ({ posts }) => {
  return (
    <>
      <aside className="none lg:flex flex-col justify-between w-[330px] h-[480px] bg-black text-white p-6 overflow-hidden">
        <h2 className="h2 text-yellow-300 mb-6 text-3xl">News</h2>
        <ul className="flex flex-col justify-between items-center h-full w-full gap-10">
          {posts.map((post) => {
            return (
              <Link to={`:/post/:id{${post.id}`}>
                <li key={post.id} className="border-b-2 pb-6  border-white/20">
                  <h3 className="text-16px font-semibold">{post.title}</h3>
                </li>
              </Link>
            );
          })}
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
