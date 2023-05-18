import React from 'react';
import PropTypes from 'prop-types';
import { StatisticStyle } from './Statistics.styled'



const Statistics = ({ title, stats }) => {
    return (
                <StatisticStyle.StatSection>
                    {title && <StatisticStyle.StatTitle>{title}</StatisticStyle.StatTitle>}
                    <StatisticStyle.StatTable>
                        {stats.map((stat) => (
                            <StatisticStyle.StatItem key={stat.id} >
                                <span>{stat.label}</span>
                                <span>{stat.percentage}%</span>
                            </StatisticStyle.StatItem>
                        ))}
                    </StatisticStyle.StatTable>
                </StatisticStyle.StatSection>
            );
        };
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
export default Statistics;
