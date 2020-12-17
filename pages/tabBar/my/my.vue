<template>
	<view class="my_content">
		<view class="my_header">
			<view class="status"></view>
			<view class="header">
				<image src="/static/my/setting.png" />
				<image src="/static/my/calendar.png" />
			</view>
		</view>
		<view class="my_info">
			<view class="top">
				<text>注册/登录</text>
				<image src="/static/my/avatar.png" />
			</view>
			<view class="bot">
				<view class="bot_list">
					<text>3</text>
					<text class="list_bot">浏览历史</text>
				</view>
				<view class="bot_list">
					<text>0</text>
					<text class="list_bot">关注收藏</text>
				</view>
				<view class="bot_list">
					<text>3</text>
					<text class="list_bot">我的房产</text>
				</view>
				<view class="bot_list">
					<text>0</text>
					<text class="list_bot">联系人</text>
				</view>
			</view>
		</view>
		<view class="reservation_box">
			<text style="padding-left: 18upx;">我的预约</text>
			<scroll-view class="scroll" scroll-x>
				<view class="reservation_list" v-for="(item,index) in reservationArr" :key="index">
					<view class="reservation_item">
						<image :src="item.imgSrc" />
						<view class="right">
							<text class="name">{{item.name}}</text>
							<text class="address">{{item.address}}</text>
							<text class="time">{{item.time}}</text>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
		<view class="features_list">
			<text>我的预约</text>
			<image src="/static/my/go.png" mode="widthFix" />
		</view>
		<view class="features_list">
			<text>成为房东</text>
			<image src="/static/my/go.png" mode="widthFix" />
		</view>
		<view class="features_list">
			<text>个人设置</text>
			<image src="/static/my/go.png" mode="widthFix" />
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				reservationArr:[{
					imgSrc:'/static/my/house.png',
					name:'觅见小屋',
					address:'深圳市 龙华区 清湖地铁站不知道小区5栋6单元 清湖地铁站不知道小区5栋6单元',
					time:'2020-12-20 14:00:00',
				},
				{
					imgSrc:'/static/my/house.png',
					name:'觅见小屋',
					address:'深圳市 龙华区 清湖地铁站不知道小区5栋6单元 清湖地铁站不知道小区5栋6单元',
					time:'2020-12-20 14:00:00',
				},
				{
					imgSrc:'/static/my/house.png',
					name:'觅见小屋',
					address:'深圳市 龙华区 清湖地铁站不知道小区5栋6单元 清湖地铁站不知道小区5栋6单元',
					time:'2020-12-20 14:00:00',
				},
				{
					imgSrc:'/static/my/house.png',
					name:'觅见小屋',
					address:'深圳市 龙华区 清湖地铁站不知道小区5栋6单元 清湖地铁站不知道小区5栋6单元',
					time:'2020-12-20 14:00:00',
				},
				{
					imgSrc:'/static/my/house.png',
					name:'觅见小屋',
					address:'深圳市 龙华区 清湖地铁站不知道小区5栋6单元 清湖地铁站不知道小区5栋6单元',
					time:'2020-12-20 14:00:00',
				}]
			};
		}
	}
</script>

<style lang="scss" scoped>
	@import "./my.scss";
</style>
