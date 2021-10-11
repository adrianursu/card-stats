function Card({ title, count, icon, iconColor, footerIcon, footerIconColor, percentage, footerText }) {
    return (
        <div className="col-xl-3 col-lg-6">
            <div className="card card-stats mb-4 mb-xl-0">
                <div className="card-body">
                    <div className="row">
                        <div className="col">
                            <h5 className="card-title text-uppercase text-muted mb-0">{title}</h5>
                            <span className="h2 font-weight-bold mb-0">{count}</span>
                        </div>
                        <div className="col-auto">
                            <div className={`icon icon-shape bg-${iconColor} text-white rounded-circle shadow`}>
                                <i className={icon} />
                            </div>
                        </div>
                    </div>
                    <p className="mt-3 mb-0 text-muted text-sm">
                        <span className={`text-${footerIconColor} mr-2`}><i className={footerIcon} /> {percentage}</span>
                        <span className="text-nowrap">{footerText}</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Card;