import React, { FC } from "react";
import ContentLoader from "react-content-loader";

export const SkeletonPizzaItem: FC = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="129" cy="121" r="111" />
    <rect x="0" y="248" rx="10" ry="10" width="280" height="26" />
    <rect x="0" y="294" rx="10" ry="10" width="280" height="88" />
    <rect x="0" y="400" rx="10" ry="10" width="95" height="30" />
    <rect x="125" y="400" rx="25" ry="25" width="152" height="45" />
  </ContentLoader>
);
