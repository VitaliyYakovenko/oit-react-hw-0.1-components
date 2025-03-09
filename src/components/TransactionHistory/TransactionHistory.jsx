import PropTypes from "prop-types";
import css from "./TransactionHistory.module.css";


export default function TransactionHistory({items}) {


    return (<table className={css.table}>
        <thead className={css.thead}>
            <tr>
                <th className={css.thead}>Type</th>
                <th className={css.thead}>Amount</th>
                <th className={css.thead}>Currency</th>
            </tr>
        </thead>
        <tbody>
            {items.map(elem => {
                return (<tr className={css.tr}  key={elem.id}>
                    <td className={css.td}>{elem.type}</td>
                    <td  className={css.td}>{elem.amount}</td>
                    <td  className={css.td}>{elem.currency}</td>
                </tr>)
            })}
        </tbody>
    </table>);
};


TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    ).isRequired,
};