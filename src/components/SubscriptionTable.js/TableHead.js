import { useState } from "react";
import YButton from "../layout/YButton";

const TableHead = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  return (
    <thead>
      <tr>
        <td className="billing">
          <div className="billing-box">
            <h2>BILLING</h2>
            <div className="select-plan-type">
              <button
                className={
                  click
                    ? "plan-type-btn annual-inactive"
                    : "plan-type-btn annual"
                }
                onClick={handleClick}
              >
                Annual
              </button>
              <button
                className={
                  click
                    ? "plan-type-btn monthly-active"
                    : "plan-type-btn monthly"
                }
                onClick={handleClick}
              >
                Monthly
              </button>
            </div>
            <p>Get 20% discount when you pay annually</p>
          </div>
        </td>
        <td className="table-row blue-background">
          <div className="table-row-box">
            <h3 className="subscription-name">FREE</h3>
            <p className="subscription-pricing free">
              FREE<span f>Purchase Annual at 20% discount</span>
            </p>

            <h3>CURRENT PLAN</h3>
          </div>
        </td>
        <td className="table-row">
          <div className="table-row-box">
            <h3 className="subscription-name"> Starter</h3>
            <p className="subscription-pricing">
              <div className="sprice">
                <p
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  <sup
                    style={{
                      fontSize: "12px",
                      fontWeight: "bold",
                      marginRight: "5px",
                    }}
                  >
                    $
                  </sup>
                  25
                </p>
              </div>
              <span>per month.Billed Annually</span>
            </p>
            <YButton text="Get Started" />
          </div>
        </td>
        <td className="table-row">
          <div className="table-row-box">
            <h3 className="subscription-name">Accelerator</h3>
            {click ? (
              <h2>Annual Only</h2>
            ) : (
              <p className="subscription-pricing">
                <div className="a-price">
                  <sup
                    style={{
                      fontSize: "12px",
                      fontWeight: "bold",
                      marginRight: "3px",
                    }}
                  >
                    $
                  </sup>
                  <p
                    style={{
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    119
                    <sub
                      style={{
                        textDecoration: "line-through",
                        marginLeft: "5px",
                        marginRight: "-2rem",
                        verticalAlign: "sub",
                        fontSize: "20px",
                        color: "rgb(224, 85, 85)",
                      }}
                    >
                      <sup
                        style={{
                          fontSize: "12px",
                          fontWeight: "bold",
                          marginRight: "3px",
                        }}
                      >
                        $
                      </sup>
                      300
                    </sub>
                  </p>
                </div>
                <span>per month.Billed Annually</span>
              </p>
            )}
            {click ? "" : <YButton text="Get Started" />}
          </div>
        </td>
      </tr>
    </thead>
  );
};

export default TableHead;
