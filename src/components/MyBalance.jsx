export default function MyBalance({ balance = 0 }) {
    const className = balance >= 0 ? "--plus" : "--minus";
    return (
      <>
        <section className={`you-balance you-balance${className}`}>
          <div className="you-balance--icon">
            <i className="material-symbols-outlined">
              account_balance_wallet
            </i>
          </div>
          <div className="you-balance-text">
            <label className="you-balance-text-title">
              Your Balance
            </label>
            <div className="amount">
              <div className="amount-number">
                {balance}
              </div>
              <div className="amount-unit">
                THB
              </div>
            </div>
          </div>
        </section >
      </>
    )
  } 