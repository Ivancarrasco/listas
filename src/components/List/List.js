import * as React from 'react';
import styles from './List.module.scss';

class List extends React.Component {
	state = {};

	componentDidMount() {}

	onClose = (index) => {
		const { onRemoveItem } = this.props;
		onRemoveItem(index);
	};

	render() {
		const { items, index } = this.props;
		return (
			<div className={styles.main}>
				<ul className={styles.list}>
					{items.map((item, i) => (
						<li key={i} className={index === i ? styles.item_selected : styles.item}>
							<p className={styles.item_name}>{item}</p>
							
						</li>
					))}
				</ul>
			</div>
		);
	}
}

export default List;
