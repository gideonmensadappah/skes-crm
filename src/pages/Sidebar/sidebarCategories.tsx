import React, { useCallback } from "react";
// import { BrowserRouter as Router, Link } from "react-router-dom";
import { RouteComponentProps, withRouter } from "react-router-dom";
interface Props extends RouteComponentProps<any> {
  category: string;
}

const SidebarCategories: React.FC<Props> = (props: Props) => {
  const { history, category } = props;

  const handleClick = useCallback(() => {
    history.push(`/${category}`);
  }, [history, category]);

  return (
    <div className="sidebar-categories" onClick={handleClick}>
      {category}
    </div>
  );
};

export default withRouter(SidebarCategories);
