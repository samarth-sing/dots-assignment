import React, { useState } from "react";
import {
  attachmentIcon,
  chatIcon,
  folderIcon,
  imageIcon,
  linkIcon,
  listIcon,
  loader,
  newTabIcon,
  peopleIcon,
  playIcon,
  profileImg,
  searchIcon,
  settingIcon,
} from "../assets/images/images";
import { motion, AnimatePresence } from "framer-motion";

const SearchBar = ({ inputField, setInputField }) => {
  const dataList = [
    {
      id: 1,
      name: "Caroline Dribsson",
      status: "Unactivated",
      img: profileImg,
      type: "account",
      usage: "",
    },
    {
      id: 2,
      name: "Adam Cadribean",
      status: "1w ago",
      img: profileImg,
      type: "account",
      usage: "",
    },
    {
      id: 3,
      name: "final_dribbble_presentation.jpg",
      status: "Edited 1w ago",
      img: imageIcon,
      type: "image",
      usage: "in Presentations",
    },
    {
      id: 4,
      name: "Margareth Cendribgssen",
      status: "Active now",
      img: profileImg,
      type: "account",
      usage: "",
    },
    {
      id: 5,
      name: "dribbble_animation.avi",
      status: "Added 1y ago",
      img: playIcon,
      type: "video",
      usage: "in Videos",
    },
    {
      id: 6,
      name: "Dribbble Folder.jpg",
      status: "Edited 2m ago",
      img: folderIcon,
      type: "folder",
      usage: "in Projects",
      files: "12 Files",
    },
    {
      id: 7,
      name: "Randall Johnsson",
      status: "Active now",
      img: profileImg,
      type: "account",
      usage: "",
    },
    {
      id: 8,
      name: "Random Michal Folder",
      status: "Edited 12m ago",
      img: folderIcon,
      type: "folder",
      usage: "in Photos",
    },
    {
      id: 9,
      name: "crative_file_frandkies.jpg",
      status: "Edited 12m ago",
      img: imageIcon,
      type: "image",
      usage: "in Photos/Assets",
    },
    {
      id: 10,
      name: "Kristinge Karand",
      status: "Active 2d ago",
      img: profileImg,
      type: "account",
      usage: "",
    },
    {
      id: 11,
      name: "files_krande_michelle.avi",
      status: "Addded 12m ago",
      img: playIcon,
      type: "video",
      usage: "in Videos",
    },
  ];

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [fetchedData, setFetchedData] = useState(false);
  const [fetchingData, setFetchingData] = useState(false);
  const [showLoadWithFetching, setShowLoadWithFetching] = useState(false);
  const [showSettingPopup, setShowSettingPopup] = useState(false);
  const [showFiles, setShowFiles] = useState(true);
  const [showPeoples, setShowPeoples] = useState(true);
  const [showChats, setShowChats] = useState(false);
  const [showLists, setShowLists] = useState(false);
  const [tabActive, setTabActive] = useState("all");
  const [rowHover, setRowHover] = useState("");
  const [copied, setCopied] = useState("");

  const onChangeHandle = (val) => {
    setData([]);
    setLoading(true);
    setInputField(val);
    setTimeout(() => {
      setFetchingData(true);
      setShowLoadWithFetching(true);
    }, 1000);
    setTimeout(() => {
      const filtered = val
        ? dataList.filter((filterData) =>
            filterData.name.toLowerCase().includes(val.toLowerCase())
          )
        : [];

      setData(filtered);
      setLoading(false);
      setFetchingData(false);
      setFetchedData(true);
    }, 2500);
  };

  const inputTextToHighlight = (text, subText) => {
    if (!subText) {
      return text;
    }

    const regex = new RegExp(`(${subText})`, "gi");
    const parts = text.split(regex);

    return parts.map((part, index) =>
      regex.test(part) ? (
        <span key={index} className="searchTextToHighlight">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  const settingsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        when: "beforeChildren",
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.15,
        staggerDirection: -1,
        when: "afterChildren",
      },
    },
  };

  const settingsItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 10 },
  };

  const detailsContainerVariants = {
    hidden: {
      opacity: 0,
      clipPath: "inset(0 0 100% 0)",
    },
    visible: {
      opacity: 1,
      clipPath: "inset(0 0 0% 0)",
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scaleY: 0,
      originY: 0.5,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  const settingIconVariant = {
    open: { rotate: 30, transition: { duration: 0.4, ease: "easeInOut" } },
    closed: { rotate: 0, transition: { duration: 0.4, ease: "easeInOut" } },
  };

  return (
    <div className="searchBox">
      <div className="searchBar">
        {loading && inputField ? (
          <img className="searchBarIcon" src={loader} alt="loader" />
        ) : (
          <img className="searchBarIcon" src={searchIcon} alt="search-icon" />
        )}
        <input
          className="searchBarInputField"
          placeholder="Searching is easier"
          value={inputField}
          onChange={(e) => onChangeHandle(e.target.value)}
        />
        {fetchedData ? (
          <button
            onClick={() => {
              setFetchedData(false);
              setData([]);
              setInputField("");
              setShowLoadWithFetching(false);
            }}
            className="searchBarClearBtn"
          >
            Clear
          </button>
        ) : (
          <div className="searchBarRightOptions">
            <div className="searchBarSIcon">
              <p>s</p>
            </div>
            <p className="searchBarQuickText">quick access</p>
          </div>
        )}
      </div>
      <AnimatePresence>
        {showLoadWithFetching || fetchingData || fetchedData ? (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={detailsContainerVariants}
          >
            {showLoadWithFetching ? (
              <div className="searchTabBox">
                <div className="searchTabs">
                  <div
                    onClick={() => {
                      setTabActive("all");
                    }}
                    className={tabActive === "all" ? "activeTab" : "tab"}
                  >
                    <span className="searchTabsField">All</span>
                    <span className="searchTabsCount">9</span>
                  </div>
                  {showFiles && (
                    <div
                      onClick={() => {
                        setTabActive("files");
                      }}
                      className={
                        tabActive === "files" ? "activeTab tab" : "tab"
                      }
                    >
                      <img
                        className="tabsIcon"
                        src={attachmentIcon}
                        alt="attachment-icon"
                      />
                      <span className="searchTabsField">Files</span>
                      <span className="searchTabsCount">9</span>
                    </div>
                  )}
                  {showPeoples && (
                    <div
                      onClick={() => {
                        setTabActive("peoples");
                      }}
                      className={
                        tabActive === "peoples" ? "activeTab tab" : "tab"
                      }
                    >
                      <img
                        className="tabsIcon"
                        src={peopleIcon}
                        alt="people-icon"
                      />
                      <span className="searchTabsField">People</span>
                      <span className="searchTabsCount">9</span>
                    </div>
                  )}
                  {showChats && (
                    <div
                      onClick={() => {
                        setTabActive("chats");
                      }}
                      className={
                        tabActive === "chats" ? "activeTab tab" : "tab"
                      }
                    >
                      <img
                        className="tabsIcon"
                        src={chatIcon}
                        alt="chat-icon"
                      />
                      <span className="searchTabsField">Chats</span>
                      <span className="searchTabsCount">9</span>
                    </div>
                  )}
                  {showLists && (
                    <div
                      onClick={() => {
                        setTabActive("lists");
                      }}
                      className={
                        tabActive === "lists" ? "activeTab tab" : "tab"
                      }
                    >
                      <img
                        className="tabsIcon"
                        src={listIcon}
                        alt="list-icon"
                      />
                      <span className="searchTabsField">Lists</span>
                      <span className="searchTabsCount">9</span>
                    </div>
                  )}
                </div>
                <div className="searchTabsSetting">
                  <div className="settingIconDiv">
                    <motion.img
                      className={"settingIcon"}
                      onClick={() => {
                        setShowSettingPopup(!showSettingPopup);
                      }}
                      variants={settingIconVariant}
                      animate={showSettingPopup ? "open" : "closed"}
                      src={settingIcon}
                      alt="setting-icon"
                    />
                  </div>
                  <AnimatePresence>
                    {showSettingPopup && (
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={settingsContainerVariants}
                        className="settingPopup"
                      >
                        <motion.div
                          variants={settingsItemVariants}
                          className="settingOption"
                        >
                          <img src={attachmentIcon} alt="attachment-icon" />
                          <span>Files</span>
                          <div
                            onClick={() => setShowFiles(!showFiles)}
                            className={
                              showFiles
                                ? "settingsOpSwitchOn settingOpSwitch"
                                : "settingOpSwitch"
                            }
                          >
                            <label
                              className={
                                showFiles
                                  ? "settingOptionOn"
                                  : "settingOptionOff"
                              }
                            ></label>
                          </div>
                        </motion.div>
                        <motion.div
                          variants={settingsItemVariants}
                          className="settingOption"
                        >
                          <img src={peopleIcon} alt="people-icon" />
                          <span>People</span>
                          <div
                            onClick={() => setShowPeoples(!showPeoples)}
                            className={
                              showPeoples
                                ? "settingsOpSwitchOn settingOpSwitch"
                                : "settingOpSwitch"
                            }
                          >
                            <label
                              className={
                                showPeoples
                                  ? "settingOptionOn"
                                  : "settingOptionOff"
                              }
                            ></label>
                          </div>
                        </motion.div>
                        <motion.div
                          variants={settingsItemVariants}
                          className="settingOption"
                        >
                          <img src={chatIcon} alt="chat-icon" />
                          <span>Chats</span>
                          <div
                            onClick={() => setShowChats(!showChats)}
                            className={
                              showChats
                                ? "settingsOpSwitchOn settingOpSwitch"
                                : "settingOpSwitch"
                            }
                          >
                            <label
                              className={
                                showChats
                                  ? "settingOptionOn"
                                  : "settingOptionOff"
                              }
                            ></label>
                          </div>
                        </motion.div>
                        <motion.div
                          variants={settingsItemVariants}
                          className="settingOption"
                        >
                          <img src={listIcon} alt="list-icon" />
                          <span>Lists</span>
                          <div
                            onClick={() => setShowLists(!showLists)}
                            className={
                              showLists
                                ? "settingsOpSwitchOn settingOpSwitch"
                                : "settingOpSwitch"
                            }
                          >
                            <label
                              className={
                                showLists
                                  ? "settingOptionOn"
                                  : "settingOptionOff"
                              }
                            ></label>
                          </div>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            ) : null}
            {fetchingData ? (
              <div className="previewBox">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="previewRow">
                    <div className="previewProfile" />
                    <div className="previewDetail">
                      <div className="previewLine previewUpper" />
                      <div className="previewLine previewLower" />
                    </div>
                  </div>
                ))}
              </div>
            ) : fetchedData ? (
              <div
                className={
                  data.length > 6
                    ? "searchBoxResult searchBoxResultsScroll"
                    : "searchBoxResult"
                }
              >
                {data.map((e) => {
                  return (
                    <div
                      key={e.id}
                      onMouseOver={() => setRowHover(e.id)}
                      onMouseLeave={() => setRowHover("")}
                      className={
                        e.id === rowHover
                          ? "searchBoxResults searchedHoveredRow"
                          : "searchBoxResults"
                      }
                    >
                      <div className="searchBoxImgBlock">
                        <img
                          className="searchDataImg"
                          src={e.img}
                          alt="profileImage"
                        />
                        {e.type === "account" && (
                          <span
                            className={
                              e.status === "Unactivated"
                                ? "accountDeactivated accountStatus"
                                : e.status === "Active now"
                                ? "accountActiveNow accountStatus"
                                : "accountActivate accountStatus"
                            }
                          ></span>
                        )}
                      </div>
                      <div className="searchDataDetails">
                        <div className="searchDataUpper">
                          <p>{inputTextToHighlight(e.name, inputField)}</p>
                          {e.files && <span>{e.files}</span>}
                        </div>
                        <div className="searchDataLower">
                          {e.usage && (
                            <div>
                              <p>{e.usage}</p>
                              <span></span>
                            </div>
                          )}
                          <p>{e.status}</p>
                        </div>
                      </div>
                      {e.id === rowHover ? (
                        <div className="searchDataLinks">
                          <div className="searchDataLinkCopyBox">
                            <label>
                              {copied === rowHover
                                ? "Linked copied!"
                                : "Copy Link"}
                            </label>
                            <img
                              onClick={() => setCopied(rowHover)}
                              src={linkIcon}
                              alt="linkIcon"
                            />
                          </div>
                          <div className="searchDataNewTabBox">
                            <img src={newTabIcon} alt="tabIcon" />
                            <span>New Tab</span>
                          </div>
                        </div>
                      ) : null}
                    </div>
                  );
                })}
              </div>
            ) : null}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
};

export default SearchBar;
