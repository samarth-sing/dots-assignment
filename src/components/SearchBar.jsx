import React, { useState } from "react";
import {
  attachmentIcon,
  chatIcon,
  listIcon,
  loader,
  peopleIcon,
  searchIcon,
  settingIcon,
} from "../assets/images/images";

const SearchBar = ({ inputField, setInputField }) => {
  const dataList = [
    {
      id: 1,
      name: "Caroline Dribsson",
      status: "Unactivated",
      img: "hi",
      type: "account",
      usage: "",
    },
    {
      id: 2,
      name: "Adam Cadribean",
      status: "1w ago",
      img: "hi",
      type: "account",
      usage: "",
    },
    {
      id: 3,
      name: "final_dribbble_presentation.jpg",
      status: "Edited 1w ago",
      img: "hi",
      type: "image",
      usage: "in Presentations",
    },
    {
      id: 4,
      name: "Margareth Cendribgssen",
      status: "Acrive 1w ago",
      img: "hi",
      type: "account",
      usage: "",
    },
    {
      id: 5,
      name: "dribbble_animation.avi",
      status: "Added 1y ago",
      img: "hi",
      type: "video",
      usage: "in Videos",
    },
    {
      id: 3,
      name: "Dribbble Folder.jpg",
      status: "Edited 2m ago",
      img: "hi",
      type: "folder",
      usage: "in Projects",
      files: "12",
    },
  ];

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [fetchedData, setFetchedData] = useState(false);
  const [showLoadWithFetching, setShowLoadWithFetching] = useState(false);
  const [showSettingPopup, setShowSettingPopup] = useState(false);
  const [showFiles, setShowFiles] = useState(true);
  const [showPeoples, setShowPeoples] = useState(true);
  const [showChats, setShowChats] = useState(false);
  const [showLists, setShowLists] = useState(false);
  const [tabActive, setTabActive] = useState("all");

  const onChangeHandle = (val) => {
    setLoading(true);
    setInputField(val);
    setTimeout(() => {
      setShowLoadWithFetching(true);
    }, [1000]);
    setTimeout(() => {
      setData(dataList);
      setLoading(false);
      setFetchedData(true);
    }, [2500]);
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
      {showLoadWithFetching ? (
        <div className="TabWithDataBox">
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
                  className={tabActive === "files" ? "activeTab tab" : "tab"}
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
                  className={tabActive === "peoples" ? "activeTab tab" : "tab"}
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
                  className={tabActive === "chats" ? "activeTab tab" : "tab"}
                >
                  <img className="tabsIcon" src={chatIcon} alt="chat-icon" />
                  <span className="searchTabsField">Chats</span>
                  <span className="searchTabsCount">9</span>
                </div>
              )}
              {showLists && (
                <div
                  onClick={() => {
                    setTabActive("lists");
                  }}
                  className={tabActive === "lists" ? "activeTab tab" : "tab"}
                >
                  <img className="tabsIcon" src={listIcon} alt="list-icon" />
                  <span className="searchTabsField">Lists</span>
                  <span className="searchTabsCount">9</span>
                </div>
              )}
            </div>
            <div className="searchTabsSetting">
              <img
                className={"settingIcon"}
                onClick={() => {
                  setShowSettingPopup(!showSettingPopup);
                }}
                src={settingIcon}
                alt="setting-icon"
              />
              {showSettingPopup && (
                <div className="settingPopup">
                  <div className="settingOption">
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
                          showFiles ? "settingOptionOn" : "settingOptionOff"
                        }
                      ></label>
                    </div>
                  </div>
                  <div className="settingOption">
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
                          showPeoples ? "settingOptionOn" : "settingOptionOff"
                        }
                      ></label>
                    </div>
                  </div>
                  <div className="settingOption">
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
                          showChats ? "settingOptionOn" : "settingOptionOff"
                        }
                      ></label>
                    </div>
                  </div>
                  <div className="settingOption">
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
                          showLists ? "settingOptionOn" : "settingOptionOff"
                        }
                      ></label>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="searchBoxResult">
            {data.map((e) => {
              return (
                <div>
                  {/* <img /> */}
                  <div>
                    <p>{e.name}</p>
                    <span>{e.status}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default SearchBar;
