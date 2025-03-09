import PropTypes from "prop-types";
import css from "./Statistics.module.css";
import getRandomColor from "utils/getRandomColor";

export default function Statistics({title,stats}) {
      
  
    return (<section className={css.section}>
        <h2 className={css.statisticsTitle}>{title}</h2>
        <ul className={css.dataList}>
        {stats.map(stat => {
         return (    
             <li style={{ backgroundColor: getRandomColor()}}
                 className={css.dataItem}
                 key={stat.id}>
                <span className={css.label}>{stat.label}</span>
                <span className={css.percentage}> {stat.percentage}</span>
            </li>
         )
        })} 
        </ul>  
    </section >)
};


Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    )
};