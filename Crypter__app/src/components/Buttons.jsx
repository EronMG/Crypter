import styles from "../styles";

export default function Upload() {
  return (
    <button
      className={`${styles.ButtonSmall} text-[#FCFCFD] bg-primaryBlue py-3 w-20 rounded-[90px] ${styles.hoverButtonBlue}`}
    >
      Upload
    </button>
  );
}
export function Connect() {
  return (
    <button
      className={`${styles.ButtonSmall} min-h-[40px] border-neutrals4 border-[2px] rounded-[90px] text-[#FCFCFD] w-[137px] ${styles.hoverButtonBlack}`}
    >
      Connect Wallet
    </button>
  );
}
export function Bid() {
  return (
    <button
      className={`${styles.ButtonSmall} w-full min-h-[48px] rounded-[90px] text-[#FCFCFD] w-[137px] ${styles.hoverButtonBlue}`}
    >
      Place a bid
    </button>
  );
}

export function View() {
  return (
    <button
      className={`${styles.ButtonSmall} w-full min-h-[48px] border-neutrals4 border-[2px] rounded-[90px] text-[#FCFCFD] w-[137px] ${styles.hoverButtonBlack}`}
    >
      View item
    </button>
  );
}
