import YButton from "./layout/YButton";
import { useState } from "react";

const PricingTable = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  return (
    <table className="subscription-plan-table" cellspacing="0" cellpadding="1">
      <label className="label">Limited Time Offer</label>
      {/* Table Head */}
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
              <YButton text="Get Started" />
            </div>
          </td>
        </tr>
      </thead>
      {/* Table Head */}

      {/* Table Body */}

      <tbody>
        <tr>
          <td colspan="5">
            <h2 className="heading">Gov Shop Membership</h2>
          </td>
        </tr>

        <tr>
          <td className="features">
            <p>Branded Profile on GovShop</p>
          </td>
          <td className="table-row blue-background">
            <div className="table-row-box">
              <i class="fas fa-check"></i>
            </div>
          </td>
          <td className="table-row">
            <div className="table-row-box">
              <i class="fas fa-check"></i>
            </div>
          </td>
          <td className="table-row">
            <div className="table-row-box">
              <i class="fas fa-check"></i>
            </div>
          </td>
        </tr>
        <tr className="gray-background">
          <td className="features">
            <p>Claimed Badge on Profile</p>
          </td>
          <td className="table-row blue-background">
            <div className="table-row-box">
              <i class="fas fa-check"></i>
            </div>
          </td>
          <td className="table-row">
            <div className="table-row-box">
              <i class="fas fa-check"></i>
            </div>
          </td>
          <td className="table-row">
            <div className="table-row-box">
              <i class="fas fa-check"></i>
            </div>
          </td>
        </tr>
        <tr>
          <td className="features">
            <p>Completeness Score on Profile</p>
          </td>
          <td className="table-row blue-background">
            <div className="table-row-box">
              <i class="fas fa-check"></i>
            </div>
          </td>
          <td className="table-row">
            <div className="table-row-box">
              <i class="fas fa-check"></i>
            </div>
          </td>
          <td className="table-row">
            <div className="table-row-box">
              <i class="fas fa-check"></i>
            </div>
          </td>
        </tr>
        <tr className="gray-background">
          <td className="features">
            <p>GovShop Newsletter</p>
          </td>
          <td className="table-row blue-background">
            <div className="table-row-box">
              <i class="fas fa-check"></i>
            </div>
          </td>
          <td className="table-row">
            <div className="table-row-box">
              <i class="fas fa-check"></i>
            </div>
          </td>
          <td className="table-row">
            <div className="table-row-box">
              <i class="fas fa-check"></i>
            </div>
          </td>
        </tr>
        <tr>
          <td colspan="5">
            <h2 className="heading">
              Opportunity Matching and Market Intelligence
            </h2>
          </td>
        </tr>

        <tr>
          <td className="features">
            <p>Market Research Newsletter</p>
          </td>
          <td className="table-row blue-background">
            <div className="table-row-box">
              <i class="fas fa-times"></i>
            </div>
          </td>
          <td className="table-row">
            <div className="table-row-box">
              <i class="fas fa-check"></i>
            </div>
          </td>
          <td className="table-row">
            <div className="table-row-box">
              <i class="fas fa-check"></i>
            </div>
          </td>
        </tr>
        <tr>
          <td className="features  highlighted-row">
            <p>
              <i
                class="fas fa-star star"
                style={{ margin: "0 5px 0 -5px" }}
              ></i>
              GovShop's PowerMatched Opportunities
            </p>
          </td>
          <td className="table-row highlighted-row">
            <div className="table-row-box">
              <i class="fas fa-check"></i>
            </div>
          </td>
          <td className="table-row highlighted-row">
            <div className="table-row-box">
              <i class="fas fa-check"></i>
            </div>
          </td>
          <td className="table-row highlighted-row">
            <div className="table-row-box">
              <i class="fas fa-check"></i>
            </div>
          </td>
        </tr>
        <tr>
          <td className="features">
            <p>Activity Notifications</p>
          </td>
          <td className="table-row blue-background">
            <div className="table-row-box">
              <i class="fas fa-times"></i>
            </div>
          </td>
          <td className="table-row">
            <div className="table-row-box">
              <i class="fas fa-times"></i>
            </div>
          </td>
          <td className="table-row">
            <div className="table-row-box">
              <p class="csoon">Coming Soon</p>
            </div>
          </td>
        </tr>
        <tr className="gray-background">
          <td className="features">
            <p>Market Insights</p>
          </td>
          <td className="table-row blue-background">
            <div className="table-row-box">
              <i class="fas fa-times"></i>
            </div>
          </td>
          <td className="table-row">
            <div className="table-row-box">
              <i class="fas fa-times"></i>
            </div>
          </td>
          <td className="table-row">
            <div className="table-row-box">
              <p class="csoon">Select Industries Coming Soon</p>
            </div>
          </td>
        </tr>

        <tr>
          <td colspan="5">
            <h2 className="heading">Marketing</h2>
          </td>
        </tr>

        <tr>
          <td className="features">
            <p>Profile Indexed on Google</p>
          </td>
          <td className="table-row blue-background">
            <div className="table-row-box">
              <i class="fas fa-times"></i>
            </div>
          </td>
          <td className="table-row">
            <div className="table-row-box">
              <i class="fas fa-check"></i>
            </div>
          </td>
          <td className="table-row">
            <div className="table-row-box">
              <i class="fas fa-check"></i>
            </div>
          </td>
        </tr>
        <tr className="gray-background">
          <td className="features">
            <p>Profile Completion by PSF Team</p>
          </td>
          <td className="table-row blue-background">
            <div className="table-row-box">
              <i class="fas fa-times"></i>
            </div>
          </td>
          <td className="table-row">
            <div className="table-row-box">
              <i class="fas fa-check"></i>
            </div>
          </td>
          <td className="table-row">
            <div className="table-row-box">
              <i class="fas fa-check"></i>
            </div>
          </td>
        </tr>
        <tr>
          <td className="features">
            <p>Discounted Ads and Sponsored Content</p>
          </td>
          <td className="table-row blue-background">
            <div className="table-row-box">
              <i class="fas fa-times"></i>
            </div>
          </td>
          <td className="table-row">
            <div className="table-row-box">
              <i class="fas fa-times"></i>
            </div>
          </td>
          <td className="table-row">
            <div className="table-row-box">
              <p class="csoon">Coming Soon</p>
            </div>
          </td>
        </tr>
        <tr className="gray-background">
          <td className="features">
            <p>3 Minute Video</p>
          </td>
          <td className="table-row blue-background">
            <div className="table-row-box">
              <i class="fas fa-times"></i>
            </div>
          </td>
          <td className="table-row">
            <div className="table-row-box">
              <i class="fas fa-times"></i>
            </div>
          </td>
          <td className="table-row">
            <div className="table-row-box">
              <p class="csoon">Annual Only</p>
            </div>
          </td>
        </tr>

        <tr>
          <td colspan="5">
            <h2 className="heading">
              Global Community Membership and Training
            </h2>
          </td>
        </tr>

        <tr>
          <td className="features">
            <p>GovShop Help Desk Videos</p>
          </td>
          <td className="table-row blue-background">
            <div className="table-row-box">
              <i class="fas fa-check"></i>
            </div>
          </td>
          <td className="table-row">
            <div className="table-row-box">
              <i class="fas fa-check"></i>
            </div>
          </td>
          <td className="table-row">
            <div className="table-row-box">
              <i class="fas fa-check"></i>
            </div>
          </td>
        </tr>
        <tr className="gray-background">
          <td className="features">
            <p>Global Community Member</p>
          </td>
          <td className="table-row blue-background">
            <div className="table-row-box">
              <p class="csoon">Coming Soon</p>
            </div>
          </td>
          <td className="table-row">
            <div className="table-row-box">
              <p class="csoon">Coming Soon</p>
            </div>
          </td>
          <td className="table-row">
            <div className="table-row-box">
              <p class="csoon">Coming Soon</p>
            </div>
          </td>
        </tr>
        <tr>
          <td className="features last-row">
            <p>Market Specific Events</p>
          </td>
          <td className="table-row blue-background last-row">
            <div className="table-row-box">
              <i class="fas fa-times"></i>
            </div>
          </td>
          <td className="table-row last-row">
            <div className="table-row-box">
              <i class="fas fa-times"></i>
            </div>
          </td>
          <td className="table-row last-row">
            <div className="table-row-box">
              <p class="csoon">Coming Soon</p>
            </div>
          </td>
        </tr>
      </tbody>
      {/* Table Body */}

      <tfoot>
        <tr>
          <td className="billing">
            <div className="billing-box"></div>
          </td>
          <td className="table-row blue-background">
            <div className="table-row-box">
              <h3>CURRENT PLAN</h3>
            </div>
          </td>
          <td className="table-row">
            <div className="table-row-box">
              <YButton text="Get Started" />
            </div>
          </td>
          <td className="table-row">
            <div className="table-row-box">
              <YButton text="Get Started" />
            </div>
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default PricingTable;
