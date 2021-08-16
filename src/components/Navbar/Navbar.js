import React, { useState /* useEffect */ } from "react";
import "./navbar.css";

import NavItem from "./NavItem";
import NavLinks from "./NavLinks";
import TitleTab from "./TitleTab";
import Menu from "./Menu";

import { ReactComponent as NotifIcon } from "../icons/notifications.svg";
import { ReactComponent as FavIcon } from "../icons/favorites.svg";
import { ReactComponent as HelpIcon } from "../icons/help.svg";
import { ReactComponent as PmIcon } from "../icons/pm.svg";
import { ReactComponent as CapaIcon } from "../icons/capa.svg";
import { ReactComponent as SearchIcon } from "../icons/search.svg";
import { ReactComponent as AddIcon } from "../icons/add.svg";
import { ReactComponent as HistoryIcon } from "../icons/refresh-history.svg";
import { ReactComponent as OptionsIcon } from "../icons/option-dots.svg";

import Counter from "../Counter/Counter";
import IconWithBadge from "../Badge/IconWithBadge";
import { position } from "../Badge/Badge";
import { useHistory } from "react-router";
import ModuleNavigations from "../ModuleNav/ModuleNavigations";
import Tabs, { Tab } from "../Tabs/Tabs";

const Navbar = () => {
  const [tabTitle, setTabTitle] = useState("");
  const [tabsList, setTabsList] = useState([]);
  const [activeTab, setActiveTab] = useState(0);
  const history = useHistory();
  const [isModuleOpen, setIsModuleOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchContent, setSearchContent] = useState();
  const [changeNeededIndx, setChangeNeededIndx] = useState(-1);
  const handleTabAdd = (newPath, newTitle) => {
    const indx = tabsList.findIndex((tab) => tab.path === newPath); //maybe need to use an iterator instead of findindex
    if (tabsList.length < 5) {
      if (indx === -1) {
        setTabsList((tabsList) => [
          ...tabsList,
          {
            title: newTitle,
            path: newPath,
          },
        ]);
        setActiveTab(tabsList.length);
        history.push(newPath);
      } else {
        handleTabSwitch(indx);
        window.alert("The tab is already open");
      }
    } else if (indx !== -1) {
      handleTabSwitch(indx);
      console.log("The tab is already open");
    } else
      console.log(
        "Reached max number of tabs. Please close some tabs to open more."
      );
  };

  const handleTabSwitch = (active) => {
    setActiveTab(active);

    tabsList.forEach((item, index) => {
      if (index === active) {
        history.push(item.path);
        //console.log(item.path);
      }
    });
  };

  const handleTabClose = (index) => {
    if (tabsList.length === 1) {
      handleModule(false);
      activeTab === -1 ? history.push(`#`) : history.push(`/`);
    } else if (tabsList.length > 1) {
      if (activeTab > index) setActiveTab(activeTab - 1);

      if (activeTab === index) {
        if (activeTab + 1 !== tabsList.length) {
          //setActiveTab(activeTab);
          history.push(tabsList[activeTab + 1].path);
        } else {
          setActiveTab(activeTab - 1);
          history.push(tabsList[activeTab - 1].path);
        }
      }
    }
    setTabsList((tabsList) => tabsList.filter((el) => el !== tabsList[index]));
  };

  const handleModule = (bool) => {
    setIsModuleOpen(bool);
  };
  return (
    <nav className="nav-container">
      {/* <div className="nav-sys"> //works fine without this, so may be get rid of this line*/}

      <Menu
        setTabTitle={setTabTitle}
        handleTabAdd={handleTabAdd}
        handleModule={handleModule}
      />

      <NavLinks>
        <NavItem>
          <FavIcon />
        </NavItem>
        <NavItem path="/notifications-and-workflow">
          {/* <NotifIcon
            onClick={() => setTabTitle("Notifications and Workflow")}
          /> */}
          <IconWithBadge position={position.topRight} count={1}>
            <IconWithBadge position={position.topLeft} count={1}>
              <NotifIcon />
            </IconWithBadge>
          </IconWithBadge>
        </NavItem>
        <NavItem path="/project-management">
          <PmIcon onClick={() => setTabTitle("Project Management")} />
        </NavItem>
        <NavItem path="/capa">
          <CapaIcon onClick={() => setTabTitle("CAPA")} />
        </NavItem>
        <NavItem path="/help">
          <HelpIcon onClick={() => setTabTitle("Help")} />
        </NavItem>
      </NavLinks>

      {isModuleOpen && (
        <div className="nav-links tabs">
          <Tabs
            active={activeTab}
            onTabSwitch={handleTabSwitch}
            onTabClose={handleTabClose}
            onTabAdd={handleTabAdd}
            showAdd={false}
            //showAdd={isModuleOpen}
            changeNeededIndx={changeNeededIndx}
            setChangeNeededIndx={setChangeNeededIndx}
          >
            {tabsList.map((tab, index) => {
              return (
                <Tab
                  key={index}
                  title={tab.title}
                  path={tab.path}
                  showClose={true}
                ></Tab>
              );
            })}
          </Tabs>
        </div>
        /* <ModuleNavigations
            isSearchOpen={isSearchOpen}
            setIsSearchOpen={setIsSearchOpen}
            searchContent={searchContent}
          /> */
      )}
      {/* <TitleTab tabTitle={tabTitle} setTabTitle={setTabTitle} />

      <NavLinks right={true}>
        <NavItem>
          <SearchIcon />
        </NavItem>
        <NavItem>
          <AddIcon />
        </NavItem>
        <NavItem>
          <Counter />
        </NavItem>
        <NavItem>
          <HistoryIcon />
        </NavItem>
        <NavItem>
          <OptionsIcon />
        </NavItem>
      </NavLinks> */}

      {/* </div> */}
    </nav>
  );
};

export default Navbar;
