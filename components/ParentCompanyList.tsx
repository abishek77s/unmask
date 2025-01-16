import { motion } from "framer-motion";
import { companies } from "@/data/brandData";
import Link from "next/link";

const ParentCompanyList = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      transition={{
        staggerChildren: 0.05,
      }}
      className="p-6 xl:px-36  max-sm:px-20 gap-8 grid grid-cols-12  "
    >
      {companies.map((c) => (
        <>
          <motion.div
            variants={{
              initial: {
                scale: 0.5,
                y: 50,
                opacity: 0,
              },
              animate: {
                scale: 1,
                y: 0,
                opacity: 1,
              },
            }}
            transition={{
              type: "spring",
              mass: 3,
              stiffness: 400,
              damping: 50,
            }}
            key={c.id}
            className="xl:col-span-3 lg:col-span-4 md:col-span-6 col-span-12 flex flex-col bg-slate-50 font-geist p-4 rounded-lg  items-center "
          >
            <Link href={`/pages/subbrand/${c.id}`}>
              <div className="p-6">
                <img src={c.logo} alt={c.name} className="h-14 " />
              </div>
              <p className="font-bold text-lg pb-4 ">{c.name}</p>
              <div className="h-[2px] w-11/12 rounded-full bg-slate-200"></div>
              <div className="flex  items-center p-4 ">
                {c.subsidiaries.slice(0, 4).map((s) => (
                  <div
                    key={s.name}
                    className="bg-slate-400 -ml-4 w-12 h-12 rounded-3xl  border-2 border-slate-100"
                  >
                    <img
                      className="w-full h-full object-cover rounded-full"
                      src="https://logos-world.net/wp-content/uploads/2022/12/POCO-Logo-500x281.png"
                    ></img>
                  </div>
                ))}
                {c.subsidiaries.length > 4 && (
                  <div className="bg-slate-300 -ml-4 w-12 h-12 rounded-3xl flex items-center justify-center text-white text-sm font-bold">
                    +{c.subsidiaries.length - 4}
                  </div>
                )}
              </div>
            </Link>
          </motion.div>
        </>
      ))}
    </motion.div>
  );
};

export default ParentCompanyList;
