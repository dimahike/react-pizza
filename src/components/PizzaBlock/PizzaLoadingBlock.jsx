import React from 'react';
import ContentLoader from 'react-content-loader';


function PizzaLoadingBlock() {
  return (
    <ContentLoader
      speed={2}
      width={286}
      height={460}
      viewBox="0 0 286 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <circle cx="143" cy="125" r="125" />
      <rect x="4" y="278" rx="8" ry="8" width="277" height="25" />
      <rect x="142" y="150" rx="0" ry="0" width="0" height="5" />
      <rect x="140" y="568" rx="8" ry="8" width="277" height="84" />
      <rect x="200" y="376" rx="8" ry="8" width="4" height="11" />
      <rect x="5" y="319" rx="8" ry="8" width="277" height="80" />
      <rect x="8" y="421" rx="8" ry="8" width="88" height="27" />
      <rect x="40" y="444" rx="0" ry="0" width="0" height="2" />
      <rect x="152" y="418" rx="22" ry="22" width="132" height="37" />
    </ContentLoader>
  );
}

export default PizzaLoadingBlock;
