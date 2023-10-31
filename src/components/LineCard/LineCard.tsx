import cn from 'classnames';
import * as React from 'react';

import Button from '../Button/Button';

import styles from './LineCard.module.css';

interface LineCardProps {
    lineNumber: string;
    stopsCount: number;
    className?: string;
    onClick?: VoidFunction;
}

const LineCard: React.FC<LineCardProps> = ({
    lineNumber,
    stopsCount,
    className,
    onClick,
}) => {
    return (
        <Button className={cn(styles.root, className)} onClick={onClick}>
            <div className={styles.title}>Line #{lineNumber}</div>
            <div className={styles.subtitle}>Stops: {stopsCount}</div>
        </Button>
    );
};

export default LineCard;
