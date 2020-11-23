export interface IConnectionsRepository {
    count(): Promise<any>;
    create(user_id: number): Promise<any>;
}