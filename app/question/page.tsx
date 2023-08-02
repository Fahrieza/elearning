"use client";

import React, { useState, useRef, useEffect  } from "react";
import { Button, Tabs } from "flowbite-react";
import { url } from "inspector";
import Image from "next/image";

interface CustomFlowbiteTheme {
  base?: string;
  tablist?: {
    base?: string;
    styles?: {
      default?: string;
      underline?: string;
      pills?: string;
      fullWidth?: string;
    };
    tabitem?: {
      base?: string;
      styles?: {
        default?: {
          base?: string;
          active?: {
            on?: string;
            off?: string;
          };
        };
        underline?: {
          base?: string;
          active?: {
            on?: string;
            off?: string;
          };
        };
        pills?: {
          base?: string;
          active?: {
            on?: string;
            off?: string;
          };
        };
        fullWidth?: {
          base?: string;
          active?: {
            on?: string;
            off?: string;
          };
        };
      };
      icon?: string;
    };
  };
  tabpanel?: string;
}

const customTheme: CustomFlowbiteTheme = {
  base: "flex flex-col max-w-xs mx-auto",
  tablist: {
    // base: "hidden flex flex-nowarp smooth-scroll",
    base: "hidden",
    styles: {
      pills:
        "font-medium text-sm text-gray-500 dark:text-gray-400 space-x-2",
    },
    tabitem: {
      base: "flex items-center justify-center p-4 rounded-t-lg text-sm font-medium first:ml-0",
      styles: {
        default: {
          base: "rounded-t-lg",
          active: {
            on: "bg-gray-100 text-cyan-600 dark:bg-gray-800 dark:text-cyan-500",
            off: "text-gray-500 hover:bg-gray-50 hover:text-gray-600 dark:text-gray-400 dark:hover:bg-gray-800  dark:hover:text-gray-300",
          },
        },
        underline: {
          base: "rounded-t-lg",
          active: {
            on: "text-cyan-600 rounded-t-lg border-b-2 border-cyan-600 active dark:text-cyan-500 dark:border-cyan-500",
            off: "border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300",
          },
        },
        pills: {
          base: "",
          active: {
            on: "rounded-lg bg-orange-400 text-white",
            off: "rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white",
          },
        },
        fullWidth: {
          base: "ml-0 first:ml-0 w-full rounded-none flex",
          active: {
            on: "p-4 text-gray-900 bg-gray-100 active dark:bg-gray-700 dark:text-white rounded-none",
            off: "bg-white hover:text-gray-700 hover:bg-gray-50 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700 rounded-none",
          },
        },
      },
      icon: "mr-2 h-5 w-5",
    },
  },
  tabpanel: "py-2",
};

const questions = [
  {
    code_question: "1",
    questionText: "Tugas Seorang Satpam PKSS ?",
    choices: [
      {choiceText:"Dont need it right now", value: 0}, 
      {choiceText:"Wasnt useful to me", value: 0},  
      {choiceText: "Too expensive", value: 0}
    ],
  },
  {
    code_question: "2",
    questionText: "Grooming Seorang Satpam PKSS (1) ? ",
    choices: [
      {choiceText : "Dont need it right now 2", value: 0},
      {choiceText : "Wasnt useful to me 2", value: 0},
      {choiceText : "Too expensive 2", value: 0},
    ],
  },
  {
    code_question: "3",
    questionText: "Grooming Seorang Satpam PKSS (2) ?",
    choices: [
      {choiceText : "Dont need it right now 2", value: 0},
      {choiceText : "Wasnt useful to me 2", value: 0},
      {choiceText : "Too expensive 2", value: 0},
    ],
  },
  {
    code_question: "4",
    questionText: "Grooming Seorang Satpam PKSS (3) ?",
    choices: [
      {choiceText : "Dont need it right now 2", value: 0},
      {choiceText : "Wasnt useful to me 2", value: 0},
      {choiceText : "Too expensive 2", value: 0},
    ],
  },
  {
    code_question: "5",
    questionText: "Peralatan yang wajib ada pada Satpam ?",
    choices: [
      {choiceText : "Dont need it right now 2", value: 0},
      {choiceText : "Wasnt useful to me 2", value: 0},
      {choiceText : "Too expensive 2", value: 0},
    ],
  },
  {
    code_question: "6",
    questionText: "Kepanjangan dari PDL ?",
    choices: [
      {choiceText : "Dont need it right now 2", value: 0},
      {choiceText : "Wasnt useful to me 2", value: 0},
      {choiceText : "Too expensive 2", value: 0},
    ],
  },
  {
    code_question: "7",
    questionText: "Memeriksa kelengkapan dan kondisi keamanan aset perusahaan (termasuk aset P3K & APAR), serta memastikan operasional perusahaan dapat berjalan dengan baik merupakan arti dari ?",
    choices: [
      {choiceText : "Dont need it right now 2", value: 0},
      {choiceText : "Wasnt useful to me 2", value: 0},
      {choiceText : "Too expensive 2", value: 0},
    ],
  },
  {
    code_question: "8",
    questionText: "Memberikan rasa aman dan perlindungan, serta memberikan pengarahan terkait alur pelayanan produk perusahaan atau saat terjadi keadaan darurat merupakan arti dari ?",
    choices: [
      {choiceText : "Dont need it right now 2", value: 0},
      {choiceText : "Wasnt useful to me 2", value: 0},
      {choiceText : "Too expensive 2", value: 0},
    ],
  },
  {
    code_question: "9",
    questionText: "Penjagaan aset bergerak dan tidak bergerak, baik milik perusahaan maupun tamu perusahaan merupakan arti dari ?",
    choices: [
      {choiceText : "Dont need it right now 2", value: 0},
      {choiceText : "Wasnt useful to me 2", value: 0},
      {choiceText : "Too expensive 2", value: 0},
    ],
  },
  {
    code_question: "10",
    questionText: "Rumus Berat Ideal?",
    choices: [
      {choiceText : "Dont need it right now 2", value: 0},
      {choiceText : "Wasnt useful to me 2", value: 0},
      {choiceText : "Too expensive 2", value: 0},
    ],
  },
  {
    code_question: "11",
    questionText: "Pilih jawaban yang paling benar. Periksa apakah ada pengumuman / instruksi / pesan-pesan yang harus di perhatikan / disampaikan merupakan ?",
    choices: [
      {choiceText : "Dont need it right now 2", value: 0},
      {choiceText : "Wasnt useful to me 2", value: 0},
      {choiceText : "Too expensive 2", value: 0},
    ],
  },
  {
    code_question: "12",
    questionText: "Apel dilakukan saat ?",
    choices: [
      {choiceText : "Dont need it right now 2", value: 0},
      {choiceText : "Wasnt useful to me 2", value: 0},
      {choiceText : "Too expensive 2", value: 0},
    ],
  },
  {
    code_question: "13",
    questionText: "Yang wajib ditandatangani oleh Petugas Satpam saat bertugas adalah ?",
    choices: [
      {choiceText : "Dont need it right now 2", value: 0},
      {choiceText : "Wasnt useful to me 2", value: 0},
      {choiceText : "Too expensive 2", value: 0},
    ],
  },
  {
    code_question: "14",
    questionText: "Menerapkan etika kerja, nilai-nilai kebijakan dan peraturan perusahaan, jujur dan bertanggung jawab merupakan ?",
    choices: [
      {choiceText : "Dont need it right now 2", value: 0},
      {choiceText : "Wasnt useful to me 2", value: 0},
      {choiceText : "Too expensive 2", value: 0},
    ],
  },
];



const Question = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabsRef = useRef(null);
  const props = { setActiveTab, tabsRef };

  function shuffleArray(array) {
    const shuffledArray = array.slice(); // Duplikasi array agar array asli tidak terpengaruh
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  }

  useEffect(() => {
    const shuffledQuestions = shuffleArray(questions);
    setShuffledQuestions(shuffledQuestions);
  }, []);

  const [shuffledQuestions, setShuffledQuestions] = useState([]);

  const [selectedChoices, setSelectedChoices] = useState(
    questions.map(() => null)
  );

  // Fungsi untuk menangani perubahan pilihan radio
  const handleRadioChange = (questionIndex, choiceIndex) => {
    const newSelectedChoices = [...selectedChoices];
    newSelectedChoices[questionIndex] = choiceIndex;
    setSelectedChoices(newSelectedChoices);
  };

  return (
    <div> <img className="absolute inset-x-2 top-0 w-40 h-auto" src="logopt.png"></img>
    <div className="relative bg-scroll">
    <div className="px-2">
      <Tabs.Group
        aria-label="Default tabs"
        style="pills"
        ref={props.tabsRef} // Menghubungkan tabsRef dengan Tabs.Group menggunakan ref
        onActiveTabChange={(tab) => props.setActiveTab(tab)}
        theme={customTheme}
      >
        {shuffledQuestions.map((question, index) => (
          <Tabs.Item key={index} active title={`Soal ${index + 1}`}>
            <div className="w-80 h-auto bg-white rounded-xl shadow-2xl">
              <div className="w-full">
                <div className="p-4 items-center justify-between">
                  <div className="flex-1"> 
                    <p className="font-bold text-2xl text-center ">Question {index + 1}/14</p>
                    <hr
                      className="my-2 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
                  </div>
                </div>

                <div className="px-4">
                  <p>{question.questionText}</p>
                  <div className="pt-5">
                    <ul className="w-48 text-sm font-medium text-gray-900 bg-white border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                      {question.choices.map((choice, choiceIndex) => (
                        <li
                          key={choiceIndex}
                          className="w-full border-gray-200 rounded-t-lg dark:border-gray-600"
                        >
                          <div className="flex items-center pl-3">
                            <input
                              id={`list-radio-${index}-${choiceIndex}`}
                              type="radio"
                              value=""
                              name={`list-radio-${index}`}
                              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                              onChange={() => handleRadioChange(index, choiceIndex)}
                            />
                            <label
                              htmlFor={`list-radio-${index}-${choiceIndex}`}
                              className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              {choice.choiceText}
                            </label>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-row justify-between py-4">
                  {index > 0 && (
                    <Button
                      onClick={() =>
                        props.tabsRef.current?.setActiveTab(index - 1)
                      }
                    >
                      Prev
                    </Button>
                  )}
                  {index < questions.length - 1 && selectedChoices[index] !== null && (
                    <Button
                      onClick={() =>
                        props.tabsRef.current?.setActiveTab(index + 1)
                      }
                    >
                      Next
                    </Button>
                  )}
                  </div>
                </div>
              </div>
            </div>
          </Tabs.Item>
        ))}
      </Tabs.Group>
    </div>
    </div>
    </div>
  );
};

export default Question;
