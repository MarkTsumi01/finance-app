export default function BalanceCard({ type = "", amount = 0 }) {
    let className, icon = ''
    switch (type) {
      case "income":
        className = "--income"
        icon = "download"
        break;
      case "expend":
        className = "--expenses"
        icon = "upload"
        break;
      default:
        return null
    }
    return (
      <>
        <div className={`balance-card balance-card${className}`}>
          <div className="balance-card-title">
            <div className="balance-card-title--icon">
              <i className="material-symbols-outlined">
                {icon}
              </i>
            </div>
            <label className="balance-card-title-label">
             {type.toUpperCase()}
            </label>
          </div>
          <div className="amount">
            <div className="amount-number">
              +{amount.toLocaleString('th-TH', { minimumFractionDigits: 2 })}
            </div>
            <div className="amount-unit">
              THB
            </div>
          </div>
        </div>
      </>
    )
  }