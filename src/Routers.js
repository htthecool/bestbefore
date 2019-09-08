import React from "react";
import { Switch, Route } from "react-router-dom";
import Base from "./components/Layout/Base";
import Basepages from "./components/Layout/Basepages";
import Alerts from "./components/Elements/Alert/Alerts";
import Buttons from "./components/Elements/Button/Buttons";
import Colors from "./components/Elements/Color/Colors";
import Dropdowns from "./components/Elements/Dropdown/Dropdowns";
import Typographys from "./components/Elements/Typographys/Typographys";
import Navs from "./components/Elements/Navs/Navs";
import Models from "./components/Elements/Model/Models";
import Fontawesome from "./components/Fontawesome/Fontawesome";
import Switchs from "./components/Elements/Switchs/Switchs";
import Lists from "./components/Elements/Lists/Lists";
import Ratings from "./components/Elements/Ratings/Ratings";
import Nicescroll from "./components/Elements/Nicescroll/nicescroll";
import Login from "./components/Authentication/Login/Login";
import Tabss from "./components/Elements/Tabs/Tabss";
import Progressbar from "./components/Elements/Progress/Progressbar";
import PopoverTooltips from "./components/Elements/Popover_Tooltips/Popover_Tooltips";
import DatePickers from "./components/Elements/Datepicker/Datepickers";
import Mapss from "./components/Maps/Maps";
import Accordions from "./components/Elements/Accordion/Accordions";
import Chartjs from "./components/Chart/Chartjs";
import Datatables from "./components/Tables/Datatables/Datatables";
import Tables from "./components/Tables/Tables/Tables";
import Forminputs from "./components/Forms/Forminput/Forminputs";
import Formvalidations from "./components/Forms/Formvalidation/Formvalidations";
import Errors from "./components/Custompage/Error/Errors";
import Formgroups from "./components/Forms/Inputgroup/Inputgroups";
import Eventcalendar from "./components/Calendar/Eventcalendar";
import Register from "./components/Authentication/Register/Register";
import Blankpage from "./components/Custompage/Blankpage/Blankpage";
import Faq from "./components/Custompage/Faq/Faq";
import Contacts from "./components/Custompage/Contacts/Contacts";
import Invoice from "./components/Custompage/Invoice/Invoice";
import Dashboard from "./components/Dashboard/Dashboard";
import Widgets from "./components/Widgets/Widgets";
import Chat from "./components/Chat/Chat";
import Mail from "./components/MailBox/Mailbox";
import Home from "./components/Home/Home";
import Results from "./components/Results/Results";

const Routers = () => {
  return (
    <Base>
      <Switch>
        <Route exact path="/" component={Results} />
        <Route path="/accordion" component={Accordions} />
        <Route path="/alerts" component={Alerts} />
        <Route path="/buttons" component={Buttons} />
        <Route path="/colors" component={Colors} />
        <Route path="/dropdown" component={Dropdowns} />
        <Route path="/typographys" component={Typographys} />
        <Route path="/navs" component={Navs} />
        <Route path="/model" component={Models} />
        <Route path="/fontawesome" component={Fontawesome} />
        <Route path="/switchs" component={Switchs} />
        <Route path="/lists" component={Lists} />
        <Route path="/ratings" component={Ratings} />
        <Route path="/nicescroll" component={Nicescroll} />
        <Route path="/chartjs" component={Chartjs} />
        <Route path="/tabs" component={Tabss} />
        <Route path="/progess" component={Progressbar} />
        <Route path="/popover_tooltips" component={PopoverTooltips} />
        <Route path="/datepicker" component={DatePickers} />
        <Route path="/maps" component={Mapss} />
        <Route path="/datatable" component={Datatables} />
        <Route path="/tables" component={Tables} />
        <Route path="/forminput" component={Forminputs} />
        <Route path="/formvalidation" component={Formvalidations} />
        <Route path="/inputgroup" component={Formgroups} />
        <Route path="/error" component={Errors} />
        <Route path="/eventcalendar" component={Eventcalendar} />
        <Route path="/blankpage" component={Blankpage} />
        <Route path="/faq" component={Faq} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/invoice" component={Invoice} />
        <Route path="/widget" component={Widgets} />
        <Route path="/chat" component={Chat} />
        <Route path="/mailbox" component={Mail} />
        <Route path="/results" component={Results} />
      </Switch>
    </Base>
  );
};
export default Routers;
