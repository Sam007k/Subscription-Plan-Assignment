import YButton from "../layout/YButton";

const TableFooter = () => {
  return (
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
  );
};

export default TableFooter;
