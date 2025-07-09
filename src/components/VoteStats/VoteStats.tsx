import type { Votes } from "../../types/votes"
import styles from "./VoteStats.module.css"
interface VoteStatsProps{
    votes: Votes;
    totalVotes: number; 
    positiveRat: number;
}
export default function VoteStats({votes, totalVotes,positiveRat }: VoteStatsProps) {
    return(    <div className={styles.container}>
        <p className={styles.stat}>Good: <strong>{votes.good}</strong></p>
        <p className={styles.stat}>Neutral: <strong>{votes.neutral }</strong></p>
        <p className={styles.stat}>Bad: <strong>{ votes.bad}</strong></p>
        <p className={styles.stat}>Total: <strong>{ totalVotes}</strong></p>
        <p className={styles.stat}>Positive: <strong>{positiveRat }%</strong></p>
</div>
    )
}