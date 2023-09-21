import { DataStore } from './DataStore';
import { ReactNode } from 'react';

export interface IDetailItem
{
	title: string;
	children: ReactNode;
}

interface IDetailDataStorePayload
{
	detail: IDetailItem | undefined;
}

class DetailDataStore extends DataStore<IDetailDataStorePayload>
{
	public static Instance = new DetailDataStore({ detail: undefined });

	public clear()
	{
		this.update({
			detail: undefined
		});
	}

	public setDetail(detail: IDetailItem)
	{
		this.update({
			detail
		})
	}
}

export default DetailDataStore.Instance;