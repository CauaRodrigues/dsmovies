import Arrow from "assets/images/Arrow";
import "./style.css";

const Pagination = () => {
	return (
		<div className="dsmovie-pagination-container">
			<div className="dsmovie-pagination-box">
				<button className="dsmovie-pagination-button" disabled={true}>
					<Arrow />
				</button>
				<p>{`${1} de ${3}`}</p>
				<button className="dsmovie-pagination-button" disabled={false}>
					<Arrow styleClass="dsmovie-flip-horizontal" />
				</button>
			</div>
		</div>
	);
};

export default Pagination;
