import { Redis } from "../../../shared/db/redis/infrastructure/Redis";
import { GameOverData } from "../../domain/domain-events/GameOverDomainEvent";
import { RoomRepository } from "../../domain/RoomRepository";

export class RedisRoomRepository implements RoomRepository {
	async saveMatch(id: string, data: GameOverData): Promise<void> {
		const redis = Redis.getInstance();
		await redis.connect();
		await redis.client.lPush(`user:${id}:duels`, JSON.stringify(data));
		await redis.client.quit();
	}

	async updatePlayerPoints(id: string, points: number): Promise<void> {
		const redis = Redis.getInstance();
		await redis.connect();
		await redis.client.zIncrBy("leaderboard", points, id);
		await redis.client.quit();
	}
}
