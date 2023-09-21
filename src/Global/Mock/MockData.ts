import { DestinyActiveCharacterSummary } from "Global/Contracts/Proto/DestinyActiveCharacterSummary";
import { DestinyPlayerUpdateMessage } from "Global/Contracts/Proto/Messages/DestinyPlayerUpdateMessage";
import { PlatformType } from "Global/Contracts/Proto/PlatformType";
import { ReactionConfigEntry } from "Global/Contracts/Proto/ReactionConfigEntry";
import { StreamerStateContract } from "Global/Contracts/Proto/StreamerStateContract";
import { StreamerStateResponse } from "Global/Contracts/Proto/StreamerStateResponse";
import { ViewerBountyStatus } from "Global/Contracts/Proto/ViewerBountyStatus";
import { ViewerStateResponse } from "Global/Contracts/Proto/ViewerStateResponse";
import { BroadcasterSystemStatus } from '../Contracts/Proto/Messages/BroadcasterSystemStatus';
import { GlobalSystemStatus } from '../Contracts/Proto/Messages/GlobalSystemStatus';
import { ViewerStateContract } from '../Contracts/Proto/ViewerStateContract';

export const setMockUsed = (used: boolean) =>
{
	if (used) { console.log("%c MOCK DATA WAS USED", "color: red; font-size: 70px;") };
	return used;
};

export const mockStreamerStatus = () =>
{
	const response = new StreamerStateResponse();

	response.Response = new StreamerStateContract();
	response.Response.IsLinked = true;
	response.Response.LastSeenSecondsSinceEpoch = 239857298374;
	response.Response.PlayerStatus = new DestinyPlayerUpdateMessage();
	response.Response.PlayerStatus.ActiveDestinyCharacter = MockPlayerUpdate() as DestinyActiveCharacterSummary;
	response.Response.unsafeBroadcasterSystemStatus = {
		Destiny: true,
		Extension: true,
		GiftSubscriptions: true,
		Reactions: true,
		StatusUpdates: true
	} as BroadcasterSystemStatus;
	response.Response.unsafeGlobalSystemStatus = {
		Destiny: true,
		Extension: true,
		GiftSubscriptions: true,
		Reactions: true,
		StatusUpdates: true
	} as GlobalSystemStatus;

	response.ErrorDetails = [];

	response.Response.ValidReactions = [
		{
			"Reaction": "PARTY",
			"Display": "🥳"
		},
		{
			"Reaction": "COOL",
			"Display": "😎"
		},
		{
			"Reaction": "WHEW",
			"Display": "😌"
		},
		{
			"Reaction": "FACE_PALM",
			"Display": "🤦"
		},
		{
			"Reaction": "CRYING",
			"Display": "😭"
		}
	] as ReactionConfigEntry[];

	return response;
};

const MockPlayerUpdate = () =>
{
	return JSON.parse(
		'{"DisplayName":"HELLOCONTROL","PlatformType":"Steam","EmblemHash":3605490918,"ActivityHash":0,"PlaylistActivityHash":0,"ActivityStartSecondsSinceEpoch":1581198204,"CharacterStats":[{"Hash":144602215,"Value":28},{"Hash":392767087,"Value":26},{"Hash":1735777505,"Value":41},{"Hash":1935470627,"Value":970},{"Hash":1943323491,"Value":48},{"Hash":2996146975,"Value":37},{"Hash":4244567218,"Value":33}],"Score":24601,"RaceHash":898834093,"GenderHash":3111576190,"ClassHash":671679327,"Level":50,"TitleRecordHash":3798931976,"Subclass":{"ItemHash":3225959819,"GridHash":465529128,"ActiveNodes":[3,6,7,11,12,13,14]},"Bounties":[{"ItemHash":2568759380,"Objectives":[],"Completed":true,"Redeemed":true},{"ItemHash":717441818,"Objectives":[],"Completed":false,"Redeemed":false},{"ItemHash":1835551337,"Objectives":[],"Completed":false,"Redeemed":false},{"ItemHash":717441819,"Objectives":[],"Completed":false,"Redeemed":false},{"ItemHash":3242830151,"Objectives":[],"Completed":true,"Redeemed":false}],"Equipment":[{"ItemHash":347366834,"BucketHash":1498876634,"Masterworked":false,"StyleItemHash":347366834,"DamageTypeHash":2303181850,"BreakerTypeHash":2611060930,"Energy":{"EnergyTypeHash":728351493,"Capacity":10,"Used":4},"PrimaryStat":{"Hash":3897883278,"Value":853},"Sockets":[{"PlugHash":647617635,"ReusablePlugs":[]},{"PlugHash":4090651448,"ReusablePlugs":[]},{"PlugHash":1561002382,"ReusablePlugs":[]},{"PlugHash":1561789734,"ReusablePlugs":[]},{"PlugHash":3326204863,"ReusablePlugs":[]},{"ReusablePlugs":[]},{"PlugHash":2243729317,"ReusablePlugs":[]},{"ReusablePlugs":[]},{"ReusablePlugs":[]},{"PlugHash":2302094943,"ReusablePlugs":[]},{"PlugHash":1498917124,"ReusablePlugs":[]}],"Stats":[{"Hash":155624089,"Value":55},{"Hash":943549884,"Value":55},{"Hash":1240592695,"Value":86},{"Hash":3871231066,"Value":13},{"Hash":4043523819,"Value":84},{"Hash":4188031367,"Value":48},{"Hash":4284893193,"Value":140}]},{"ItemHash":3356526253,"BucketHash":2465295065,"Masterworked":false,"StyleItemHash":3356526253,"DamageTypeHash":2303181850,"BreakerTypeHash":2611060930,"Energy":{"EnergyTypeHash":728351493,"Capacity":10,"Used":0},"PrimaryStat":{"Hash":3897883278,"Value":855},"Sockets":[{"PlugHash":996573084,"ReusablePlugs":[]},{"PlugHash":1300023272,"ReusablePlugs":[]},{"PlugHash":106909392,"ReusablePlugs":[]},{"PlugHash":4071163871,"ReusablePlugs":[]},{"PlugHash":3300816228,"ReusablePlugs":[]},{"PlugHash":2588739578,"ReusablePlugs":[]},{"PlugHash":2323986101,"ReusablePlugs":[]},{"PlugHash":150943604,"ReusablePlugs":[]},{"ReusablePlugs":[]},{"PlugHash":2285418970,"ReusablePlugs":[]}],"Stats":[{"Hash":155624089,"Value":51},{"Hash":943549884,"Value":48},{"Hash":1240592695,"Value":39},{"Hash":3871231066,"Value":7},{"Hash":4043523819,"Value":65},{"Hash":4188031367,"Value":62},{"Hash":4284893193,"Value":140}]},{"ItemHash":301362381,"BucketHash":953998645,"Masterworked":false,"StyleItemHash":301362381,"DamageTypeHash":2303181850,"BreakerTypeHash":2611060930,"Energy":{"EnergyTypeHash":728351493,"Capacity":10,"Used":7},"PrimaryStat":{"Hash":3897883278,"Value":833},"Sockets":[{"PlugHash":1294026524,"ReusablePlugs":[]},{"PlugHash":1844523823,"ReusablePlugs":[]},{"PlugHash":1771897777,"ReusablePlugs":[]},{"PlugHash":957782887,"ReusablePlugs":[]},{"PlugHash":706527188,"ReusablePlugs":[]},{"PlugHash":1821705878,"ReusablePlugs":[]},{"PlugHash":371216963,"ReusablePlugs":[]},{"PlugHash":4105787904,"ReusablePlugs":[]},{"PlugHash":2931483505,"ReusablePlugs":[]},{"PlugHash":2285418970,"ReusablePlugs":[]}],"Stats":[{"Hash":155624089,"Value":60},{"Hash":943549884,"Value":51},{"Hash":2523465841,"Value":31},{"Hash":3614673599,"Value":35},{"Hash":3871231066,"Value":7},{"Hash":4188031367,"Value":27},{"Hash":4284893193,"Value":120}]},{"ItemHash":432525353,"BucketHash":3448274439,"Masterworked":false,"StyleItemHash":432525353,"DamageTypeHash":2303181850,"BreakerTypeHash":2611060930,"Energy":{"EnergyTypeHash":728351493,"Capacity":10,"Used":3},"PrimaryStat":{"Hash":3897883278,"Value":891},"Sockets":[{"PlugHash":481675395,"ReusablePlugs":[]},{"PlugHash":807186981,"ReusablePlugs":[]},{"PlugHash":807186981,"ReusablePlugs":[]},{"ReusablePlugs":[]},{"PlugHash":4248210736,"ReusablePlugs":[]},{"PlugHash":4048086884,"ReusablePlugs":[]},{"PlugHash":3135249387,"ReusablePlugs":[]},{"PlugHash":3816367703,"ReusablePlugs":[]},{"PlugHash":32051168,"ReusablePlugs":[]},{"PlugHash":3804506889,"ReusablePlugs":[]},{"PlugHash":702981643,"ReusablePlugs":[]}],"Stats":[{"Hash":144602215,"Value":12},{"Hash":392767087,"Value":6},{"Hash":1735777505,"Value":7},{"Hash":1943323491,"Value":10},{"Hash":2996146975,"Value":6},{"Hash":4244567218,"Value":7}]},{"ItemHash":1688602431,"BucketHash":3551918588,"Masterworked":false,"StyleItemHash":1688602431,"DamageTypeHash":2303181850,"BreakerTypeHash":2611060930,"Energy":{"EnergyTypeHash":728351493,"Capacity":10,"Used":5},"PrimaryStat":{"Hash":3897883278,"Value":847},"Sockets":[{"PlugHash":481675395,"ReusablePlugs":[]},{"PlugHash":1844045567,"ReusablePlugs":[]},{"PlugHash":1844045567,"ReusablePlugs":[]},{"PlugHash":2805134531,"ReusablePlugs":[]},{"PlugHash":4248210736,"ReusablePlugs":[]},{"PlugHash":3482456145,"ReusablePlugs":[]},{"PlugHash":176934377,"ReusablePlugs":[]},{"PlugHash":3420580409,"ReusablePlugs":[]},{"PlugHash":4054265521,"ReusablePlugs":[]},{"PlugHash":3076594222,"ReusablePlugs":[]}],"Stats":[{"Hash":144602215,"Value":8},{"Hash":392767087,"Value":3},{"Hash":1735777505,"Value":6},{"Hash":1943323491,"Value":14},{"Hash":2996146975,"Value":13},{"Hash":4244567218,"Value":13}]},{"ItemHash":3434158555,"BucketHash":14239492,"Masterworked":false,"StyleItemHash":3434158555,"DamageTypeHash":2303181850,"BreakerTypeHash":2611060930,"Energy":{"EnergyTypeHash":728351493,"Capacity":10,"Used":4},"PrimaryStat":{"Hash":3897883278,"Value":882},"Sockets":[{"PlugHash":481675395,"ReusablePlugs":[]},{"PlugHash":1659393211,"ReusablePlugs":[]},{"PlugHash":1659393211,"ReusablePlugs":[]},{"ReusablePlugs":[]},{"PlugHash":4248210736,"ReusablePlugs":[]},{"PlugHash":4048086885,"ReusablePlugs":[]},{"PlugHash":1144611477,"ReusablePlugs":[]},{"PlugHash":3912049957,"ReusablePlugs":[]},{"PlugHash":3393081898,"ReusablePlugs":[]},{"PlugHash":3393081898,"ReusablePlugs":[]},{"PlugHash":702981643,"ReusablePlugs":[]}],"Stats":[{"Hash":144602215,"Value":2},{"Hash":392767087,"Value":10},{"Hash":1735777505,"Value":22},{"Hash":1943323491,"Value":7},{"Hash":2996146975,"Value":6},{"Hash":4244567218,"Value":2}]},{"ItemHash":1691784182,"BucketHash":20886954,"Masterworked":false,"StyleItemHash":1691784182,"DamageTypeHash":2303181850,"BreakerTypeHash":2611060930,"Energy":{"EnergyTypeHash":728351493,"Capacity":10,"Used":2},"PrimaryStat":{"Hash":3897883278,"Value":793},"Sockets":[{"PlugHash":481675395,"ReusablePlugs":[]},{"PlugHash":573150099,"ReusablePlugs":[]},{"ReusablePlugs":[]},{"ReusablePlugs":[]},{"PlugHash":1182982129,"ReusablePlugs":[]},{"PlugHash":3020065857,"ReusablePlugs":[]},{"PlugHash":2236091344,"ReusablePlugs":[]},{"PlugHash":181487579,"ReusablePlugs":[]},{"PlugHash":4222896411,"ReusablePlugs":[]},{"PlugHash":4085212425,"ReusablePlugs":[]}],"Stats":[{"Hash":144602215,"Value":6},{"Hash":392767087,"Value":7},{"Hash":1735777505,"Value":6},{"Hash":1943323491,"Value":7},{"Hash":2996146975,"Value":12},{"Hash":4244567218,"Value":11}]},{"ItemHash":1726695877,"BucketHash":1585787867,"Masterworked":false,"StyleItemHash":1726695877,"DamageTypeHash":2303181850,"BreakerTypeHash":2611060930,"Energy":{"EnergyTypeHash":728351493,"Capacity":10,"Used":5},"PrimaryStat":{"Hash":3897883278,"Value":945},"Sockets":[{"PlugHash":2645858828,"ReusablePlugs":[]},{"PlugHash":1513970148,"ReusablePlugs":[]},{"PlugHash":1137289077,"ReusablePlugs":[]},{"ReusablePlugs":[]},{"PlugHash":1402284586,"ReusablePlugs":[]},{"PlugHash":4048086889,"ReusablePlugs":[]},{"PlugHash":2791924127,"ReusablePlugs":[]}],"Stats":[]},{"ItemHash":779216206,"BucketHash":4023194814,"Masterworked":false,"StyleItemHash":779216206,"DamageTypeHash":2303181850,"BreakerTypeHash":2611060930,"Energy":{"EnergyTypeHash":728351493,"Capacity":10,"Used":2},"PrimaryStat":{"Hash":3897883278,"Value":864},"Sockets":[{"ReusablePlugs":[]},{"PlugHash":2426387438,"ReusablePlugs":[]},{"PlugHash":1255489387,"ReusablePlugs":[]},{"PlugHash":1612078667,"ReusablePlugs":[]},{"PlugHash":1255371660,"ReusablePlugs":[]}],"Stats":[]},{"ItemHash":4248884708,"BucketHash":2025709351,"Masterworked":true,"StyleItemHash":4248884708,"DamageTypeHash":2303181850,"BreakerTypeHash":2611060930,"Energy":{"EnergyTypeHash":728351493,"Capacity":10,"Used":6},"PrimaryStat":{"Hash":3897883278,"Value":897},"Sockets":[{"PlugHash":4248210736,"ReusablePlugs":[]},{"PlugHash":2978337238,"ReusablePlugs":[]},{"PlugHash":1890164722,"ReusablePlugs":[]},{"PlugHash":2323170449,"ReusablePlugs":[]}],"Stats":[]},{"ItemHash":855351524,"BucketHash":284967655,"Masterworked":false,"StyleItemHash":855351524,"DamageTypeHash":2303181850,"BreakerTypeHash":2611060930,"Energy":{"EnergyTypeHash":728351493,"Capacity":10,"Used":5},"PrimaryStat":{"Hash":3897883278,"Value":825},"Sockets":[{"PlugHash":3205869476,"ReusablePlugs":[]},{"PlugHash":1556665151,"ReusablePlugs":[]}],"Stats":[]},{"ItemHash":1334959255,"BucketHash":3284755031,"Masterworked":false,"StyleItemHash":1334959255,"DamageTypeHash":2303181850,"BreakerTypeHash":2611060930,"Energy":{"EnergyTypeHash":728351493,"Capacity":10,"Used":2},"PrimaryStat":{"Hash":3897883278,"Value":817},"Sockets":[],"Stats":[]},{"ItemHash":2873099163,"BucketHash":4292445962,"Masterworked":false,"StyleItemHash":2873099163,"DamageTypeHash":2303181850,"BreakerTypeHash":2611060930,"Energy":{"EnergyTypeHash":728351493,"Capacity":10,"Used":6},"PrimaryStat":{"Hash":3897883278,"Value":753},"Sockets":[{"PlugHash":2888893953,"ReusablePlugs":[]},{"PlugHash":3803357562,"ReusablePlugs":[]},{"PlugHash":2837411633,"ReusablePlugs":[]},{"PlugHash":2557674074,"ReusablePlugs":[]},{"PlugHash":2293597301,"ReusablePlugs":[]},{"PlugHash":2093762600,"ReusablePlugs":[]}],"Stats":[]},{"ItemHash":3605490918,"BucketHash":4274335291,"Masterworked":false,"StyleItemHash":3605490918,"DamageTypeHash":2303181850,"BreakerTypeHash":2611060930,"Energy":{"EnergyTypeHash":728351493,"Capacity":10,"Used":2},"PrimaryStat":{"Hash":3897883278,"Value":815},"Sockets":[],"Stats":[]},{"ItemHash":152583919,"BucketHash":3683254069,"Masterworked":false,"StyleItemHash":152583919,"DamageTypeHash":2303181850,"BreakerTypeHash":2611060930,"Energy":{"EnergyTypeHash":728351493,"Capacity":10,"Used":5},"PrimaryStat":{"Hash":3897883278,"Value":819},"Sockets":[],"Stats":[]},{"ItemHash":3183180185,"BucketHash":1107761855,"Masterworked":false,"StyleItemHash":3183180185,"DamageTypeHash":2303181850,"BreakerTypeHash":2611060930,"Energy":{"EnergyTypeHash":728351493,"Capacity":10,"Used":4},"PrimaryStat":{"Hash":3897883278,"Value":899},"Sockets":[{"PlugHash":1897536429,"ReusablePlugs":[]},{"PlugHash":908677920,"ReusablePlugs":[]},{"PlugHash":1422833575,"ReusablePlugs":[]},{"PlugHash":159967058,"ReusablePlugs":[]}],"Stats":[]},{"ItemHash":3360014173,"BucketHash":1506418338,"Masterworked":false,"StyleItemHash":3360014173,"DamageTypeHash":2303181850,"BreakerTypeHash":2611060930,"Energy":{"EnergyTypeHash":728351493,"Capacity":10,"Used":5},"PrimaryStat":{"Hash":3897883278,"Value":753},"Sockets":[],"Stats":[]}],"DestinyTrialsTicket":{"TicketItemHash":1600065451,"WinCount":5,"LossCount":1,"IsLossForgivenessApplicable":true,"LossForgivenessUsed":false},"Metrics":[{"MetricHash":250859887,"MetricValue":87649},{"MetricHash":301249970,"MetricValue":6},{"MetricHash":1765255052,"MetricValue":19}]}'
	)
};

export const MockViewerStateResponse = () =>
{
	const response = new ViewerStateResponse();
	response.Response = new ViewerStateContract();
	response.Response.IsLinked = true;

	response.Response.Platforms = [
		PlatformType.Steam
	];

	const bounty1 = new ViewerBountyStatus();

	bounty1.IsCompleted = false;
	bounty1.IsRedeemed = false;
	bounty1.CompletionGoalValue = 10;
	bounty1.Progress = 3;
	bounty1.ProgressionHash = 1345591265;

	response.Response.ViewerBountyStatus = [
		bounty1,
	];

	response.ErrorDetails = [];

	return response;
}