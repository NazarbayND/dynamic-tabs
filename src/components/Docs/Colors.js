import React from "react";
import "./colors.css";

const monochrome = [
  "#464646",
  "#646464",
  "#8D8D8D",
  "#CCCCCC",
  "#DDDDDD",
  "#E1E1E1",
  "#EEEEEE",
  "#F1F1F1",
  "#F9F9F9",
  "#FFFFFF",
];
/* f5f5f5
f0f0f0
e0e0e0
c4c4c4
aaaaaa
 */

const colors = [
  {
    color: "Orange",
    hex: "#F15B2C",
  },
  {
    color: "Red",
    hex: "#D10000",
  },
  {
    color: "Light blue",
    hex: "#CAD4E3",
  },
  {
    color: "Blue",
    hex: "#6385DB",
  },
];

const Colors = () => {
  return (
    <div className="colors-container">
      <div className="tbl">
        <div className="clr-line">
          <div className="cln1"> Name </div>
          <div className="cln2"> Swatches </div>
        </div>

        <div className="clr-line2">
          <div className="cln1 clr">
            <div className="main"> Monochrome </div>
          </div>

          <div className="cln2 clr">
            <div className="cont">
              {monochrome.map((color) => {
                return (
                  <>
                    <div className="main">
                      <div
                        title={color}
                        className="one"
                        style={{ background: color }}
                      ></div>
                    </div>
                    <div className="sub">
                      <div title={color} className="one">
                        <div>{color}</div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>

        {colors.map((color) => {
          return (
            <div className="clr-line2">
              <div className="cln1 clr">
                <div className="main"> {color.color} </div>
                <div className="sub"> {color.color} </div>
              </div>

              <div className="cln2 clr">
                <div className="cont">
                  <div className="main">
                    <div
                      title={color.hex}
                      className="one"
                      style={{ background: color.hex }}
                    ></div>
                  </div>
                  <div className="sub">
                    <div title={color.hex} className="one">
                      <div>{color.hex}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        <div className="clr-line2">
          <div className="cln1 clr">
            <div className="main"> Monochrome </div>
          </div>

          <div className="cln2 clr">
            <div className="cont">
              <div className="main">
                {monochrome.map((color) => {
                  return (
                    <>
                      <div
                        title={color}
                        className="one"
                        style={{ background: color }}
                      ></div>
                    </>
                  );
                })}
              </div>

              <div className="sub">
                {monochrome.map((color) => {
                  return (
                    <div title={color} className="one">
                      <div>{color}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Colors;
