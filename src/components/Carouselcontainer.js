import React from "react";
import Carousel from "react-elastic-carousel";
import { connect } from "react-redux";
import "../assets/css/style.css";
const breakpoint = [
  {
    width: 1,
    itemsToShow: 1,
  },
  {
    width: 550,
    itemsToShow: 2,
    itemsToScroll: 2,
  },
  {
    width: 768,
    itemsToShow: 3,
    itemsToScroll: 3,
  },
];

const Carouselcontainer = (props) => {
  const arr = props.data;
  return (
    <>
      {arr.length ? (
        <div className="cora">
          <Carousel breakPoints={breakpoint}>
            {arr.map((item) => {
              var styleimg = {};
              item.thumbnail.length === 0
                ? (styleimg = {
                    backgroundImage:
                      "url(https://www.allthepost.com/wp-content/uploads/2019/09/fast-food.jpg)",
                    backgroundSize: "cover",
                  })
                : (styleimg = {
                    backgroundImage: "url(" + item.thumbnail + ")",
                    backgroundSize: "cover",
                  });

              return (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="carousel"
                  style={styleimg}
                >
                  <div className="cara">Title: {item.title}</div>
                </a>
              );
            })}
          </Carousel>
        </div>
      ) : (
        <div className="carousel-wrapper">
          <Carousel breakPoints={breakpoint}>
            <a
              className="carousel"
              href="http://www.bigoven.com/100097-Idli-(Steamed-Rice-and-Pulse-Cake)-recipe.html"
              target="_blank"
              rel="noreferrer"
              style={{
                backgroundImage: "url(http://img.recipepuppy.com/825019.jpg)",
                backgroundSize: "cover",
              }}
            >
              <div className="cara">
                Title: Idli (Steamed Rice and Pulse Cake)
              </div>
            </a>
            <a
              className="carousel"
              href="http://www.bigoven.com/156685-Meat-Momos-(Nepali-Meat-Dumplings)-recipe.html"
              target="_blank"
              rel="noreferrer"
              style={{
                backgroundImage: "url(http://img.recipepuppy.com/761861.jpg)",
                backgroundSize: "cover",
              }}
            >
              <div className="cara">Title: Meat Momos (Nepali Meat Dumplings)</div>
            </a>

            <a
              className="carousel"
              href="http://www.grouprecipes.com/49729/jonathans-vegetarian-or-not-taco-meat.html"
              target="_blank"
              rel="noreferrer"
              style={{
                backgroundImage: "url(http://img.recipepuppy.com/394236.jpg)",
                backgroundSize: "cover",
              }}
            >
              <div className="cara">
              Title: Jonathans Vegetarian Or Not Taco Meat Recipe
              </div>
            </a>
          </Carousel>
        </div>
      )}
    </>
  );
};
const mapStateToProps = (store) => {
  return {
    data: store,
  };
};

export default connect(mapStateToProps, null)(Carouselcontainer);
