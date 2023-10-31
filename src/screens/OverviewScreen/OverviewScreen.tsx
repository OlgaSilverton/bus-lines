import * as React from 'react';

import LineCard from '../../components/LineCard/LineCard';
import Modal from '../../components/Modal/Modal';
import { LineData, getLongestLines } from '../../utils/getLongestLines';
import { ScreenLayout } from '../ScreenLayout';

import {
    WithJourneysAndStopsProps,
    withJourneysAndStops,
} from './withJourneysAndStops';

import styles from './OverviewScreen.module.css';

interface OverviewScreenProps extends WithJourneysAndStopsProps {}

/* Ideally I would make a proper modal provider for the entire app, but with the only one modal it is fine as is. */
/* Might also worth it to parse the stops names only when the corresponding modal is opened and there is the actual need for that data (now it is done in the `getLongestLines` function) */
/* Can add nice presentation for the stops list using some visualization library */
function OverviewScreen(props: OverviewScreenProps) {
    const { journeys, stops } = props;

    const [lineData, setLineData] = React.useState<LineData[]>([]);
    const [selectedLine, setSelectedLine] = React.useState<LineData | null>(
        null
    );
    const [showModal, setShowModal] = React.useState(false);

    React.useEffect(() => {
        const lineData = getLongestLines({
            journeys,
            stops,
        });
        setLineData(lineData);
    }, [journeys, stops]);

    return (
        <ScreenLayout>
            <h1>The Longest Bus Lines</h1>

            <section className={styles.section}>
                {lineData.map((item) => (
                    <LineCard
                        key={item.lineNumber}
                        className={styles.lineCard}
                        lineNumber={item.lineNumber}
                        stopsCount={item.stopsCount}
                        onClick={() => {
                            setSelectedLine(item);
                            setShowModal(true);
                        }}
                    />
                ))}
            </section>

            <Modal
                isOpen={showModal}
                onAfterClose={() => setSelectedLine(null)}
                title={
                    selectedLine
                        ? `Bus stops for Line ${selectedLine.lineNumber}`
                        : 'Bus stops'
                }
                handleClose={() => setShowModal(false)}
            >
                <ul>
                    {selectedLine &&
                        selectedLine.stops.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                </ul>
            </Modal>
        </ScreenLayout>
    );
}

export default withJourneysAndStops(OverviewScreen);
