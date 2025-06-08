import React, { useState } from "react";
import { motion } from "motion/react";


const ToDo = () => {
  const [tasks, setTasks] = useState("");
  const [ToDo, setToDo] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editedText, setEditedText] = useState("");

  const addTask = () => {
    if (tasks.trim() === "") return;
    setToDo([...ToDo, tasks]);
    setTasks("");
  };

  const DelTask = (i) => {
    setToDo(ToDo.filter((_, index) => i !== index));
  };

  const EditTask = (i) => {
    setEditIndex(i);
    setEditedText(ToDo[i]);
  };

  const SaveTask = () => {
    const updatedTask = [...ToDo];
    updatedTask[editIndex] = editedText;
    setToDo(updatedTask);
    setEditIndex(null); // reset to null
    setEditedText(""); // optional: clear edited text
  };

  return (
    <>
      <img
        src="/Images/wave-haikei.svg"
        className="fixed bottom-0 left-0 w-full z-[-1]  object-cover   "
        alt="wave background"
      />

      <div className="container mx-auto px-4 flex flex-col items-center p-4 m-4 gap-16">
        <div>
          <h1 className="text-2xl font-bold bg-gradient-to-br from-yellow-500 to-green-700 text-white px-4 py-2 rounded-xl">
            Plan Your Day with our TO DO List
          </h1>
        </div>

        <div className="w-full max-w-150 h-full border-4 border-gray-500 p-4 relative">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
            <motion.input
              whileHover={{ scale: 1.05 }}
              initial={{ x: -200, y: -150, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              transition={{
                x: { type: "spring", duration: 1 },
                y: { type: "spring", delay: 1, duration: 1 },
                opacity: { delay: 0.5, duration: 1, type: "spring" },
              }}
              type="text"
              placeholder="Enter your Task"
              className="w-full  sm:w-[70%] h-10 px-4 bg-amber-200 text-lg rounded-2xl"
              value={tasks}
              onChange={(e) => setTasks(e.target.value)}
            />
            <motion.button
              whileHover={{ scale: 1.2 }}
              initial={{ opacity: 0, y: -150, x: 300 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{
                x: { duration: 1, type: "tween" },
                y: { delay: 1, duration: 1, type: "tween" },
                opacity: { delay: 0.5, duration: 1, type: "tween" },
              }}
              className="ml-4 px-6 py-2 bg-gradient-to-br from-yellow-500 to-green-700 text-white rounded-2xl"
              onClick={addTask}
            >
              Add
            </motion.button>
          </div>

          <h2 className="text-center font-semibold text-4xl text-[#0066FF] mb-4">
            Your ToDo's
          </h2>
          <div>
            {ToDo.map((item, index) => (
              <div className="flex flex-col sm:flex-row justify-between items-center gap-2 mb-4 bg-gray-100 px-4 py-2 rounded">
                {editIndex === index ? (
                  <>
                    <input
                      type="text"
                      value={editedText}
                      onChange={(e) => setEditedText(e.target.value)}
                      className="w-full sm:w-[60%] border px-2 py-1 rounded"
                    />
                    <button
                      onClick={SaveTask}
                      className="bg-green-500 text-white px-3 py-1 rounded"
                    >
                      Save
                    </button>
                  </>
                ) : (
                  <>
                    <motion.ul
                      initial="hidden"
                      animate="visible"
                      variants={{
                        visible: {
                          transition: {
                            staggerChildren: 0.1,
                          },
                        },
                      }}
                    >
                      <motion.li
                        variants={{
                          hidden: { opacity: 0, x: -20 },
                          visible: { opacity: 1, x: 0 },
                        }}
                        className="list-none text-lg"
                      >
                        {item}
                      </motion.li>
                    </motion.ul>

                    <div className="space-x-2">
                      <button
                        onClick={() => DelTask(index)}
                        className="bg-red-500 text-white px-3 py-1 rounded"
                      >
                        Del
                      </button>
                      <button
                        onClick={() => EditTask(index)}
                        className="bg-yellow-500 text-white px-3 py-1 rounded"
                      >
                        Edit
                      </button>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ToDo;
