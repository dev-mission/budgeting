import React from "react";
import resoucesData from "../../data/resources.json";
import ResourceList from "./ResourceDemoList";
import {
  GraphUp,
  ListCheck,
  Trophy,
  CreditCard,
  DashCircle,
} from "../../shared/logo/ResourceIcon";
import "./Resources.scss";

const Resources = () => {
  function renderIcon(iconName) {
    switch (iconName) {
      case "checklist":
        return <ListCheck />;
      case "Graph up":
        return <GraphUp />;
      case "Credit card":
        return <CreditCard />;
      case "Trophy":
        return <Trophy />;
      default:
        return <DashCircle />;
    }
  }

  return (
    <main className="resources">
      <section className="resouces__header">
        <div className="row">
          <h2 className="resource__title offset-1 col-md-10 pt-4">
            Do you need other financial assistance?
          </h2>
        </div>
        <div className="row mb-4">
          <p className="resource__subtitle offset-1  col-md-10">
            Check out our current list of resources below!
          </p>
        </div>
      </section>
      <section className="row">
        <div className="d-flex flex-wrap .justify-content-*-between offset-3 col-md-6">
          {resoucesData.map((data) => (
            <ResourceList key={data.id} title={data.title} desc={data.desc}>
              {renderIcon(data.component)}
            </ResourceList>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Resources;
