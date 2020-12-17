<template>
	<view class="home_content">
		<view class="home_header">
			<view class="status"></view>
			<view class="header">
				
			</view>
		</view>
		<view class="header_placeholder"></view>
		
		<view class="kingkong">
			<view class="kingkong_list" v-for="(item,index) in kingkongArr" :key="index">
				<view class="list_box" :style="{background:item.bgColor}">
					<image :src="item.imgSrc" mode="widthFix" />
				</view>
				<text>{{item.name}}</text>
			</view>
		</view>
		
		<view class="c">
			<image class="c_img" src="/static/home/c.png" mode="widthFix" />
			<image class="title" src="/static/home/c_title.png" mode="widthFix" />
		</view>
		
		<view class="house">
			<view class="house_header">
				<view class="right">
					<view class="r_list">
						<text>整租</text>
						<image src="/static/home/down.png" />
					</view>
					<view class="r_list">
						<text>位置</text>
						<image src="/static/home/down.png" />
					</view>
					<view class="r_list">
						<text>租金</text>
						<image src="/static/home/down.png" />
					</view>
					<view class="r_list">
						<text>户型</text>
						<image src="/static/home/down.png" />
					</view>
				</view>
				<image class="filter" src="/static/home/filter.png" />
			</view>
			<view class="house_ul">
				<view class="house_list" v-for="(item,index) in houseArr" :key="index">
					<image class="house_img" :src="item.imgSrc" />
					<view class="right">
						<view class="top">
							<text class="title">{{item.type}}·{{item.title}} {{item.roomType}}</text>
							<view class="label_ul">
								<text class="label_list" v-for="(item2,index2) in item.label" :key="index2">{{item2}}</text>
							</view>
							<text class="area">{{item.area}}/{{item.position}}</text>
							<text class="address">{{item.address}}</text>
						</view>
						<view class="bot">
							<view class="left">
								<text class="price">{{item.price}}元</text><text>/{{item.priceType}}</text>
							</view>
							<image src="/static/home/love.png" />
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				kingkongArr:[{
					name:'租房',
					bgColor:'#40E19E',
					imgSrc:'/static/home/kingkong/renting.png'
				},
				{
					name:'二手房',
					bgColor:'#FF7663',
					imgSrc:'/static/home/kingkong/SecondHhand.png'
				},
				{
					name:'新房',
					bgColor:'#FCC810',
					imgSrc:'/static/home/kingkong/new.png'
				},
				{
					name:'保洁',
					bgColor:'#FFE667',
					imgSrc:'/static/home/kingkong/cleaning.png'
				},
				{
					name:'服务',
					bgColor:'#8DD7D6',
					imgSrc:'/static/home/kingkong/service.png'
				},
				{
					name:'装修',
					bgColor:'#5AA9F4',
					imgSrc:'/static/home/kingkong/renovate.png'
				},
				{
					name:'民宿',
					bgColor:'#8FD4F5',
					imgSrc:'/static/home/kingkong/Minshuku.png'
				},
				{
					name:'搬家',
					bgColor:'#84FAB0',
					imgSrc:'/static/home/kingkong/move.png'
				},
				{
					name:'驿站',
					bgColor:'#D4FC78',
					imgSrc:'/static/home/kingkong/post.png'
				},
				{
					name:'旅行',
					bgColor:'#F9ADA1',
					imgSrc:'/static/home/kingkong/travel.png'
				}],
				houseArr:[{
					imgSrc:'/static/home/house.png',
					type:'整租',
					title:'花园里32栋',
					roomType:'三室两厅',
					label:['近地铁','有电梯','民水民电'],
					area:'89m²',
					position:'南',
					address:'龙华区·观澜',
					price:'3900',
					priceType:'月'
				},
				{
					imgSrc:'/static/home/house.png',
					type:'整租',
					title:'花园里32栋',
					roomType:'三室两厅',
					label:['近地铁','有电梯','民水民电'],
					area:'89m²',
					position:'南',
					address:'龙华区·观澜',
					price:'3900',
					priceType:'月'
				},
				{
					imgSrc:'/static/home/house.png',
					type:'整租',
					title:'花园里32栋',
					roomType:'三室两厅',
					label:['近地铁','有电梯','民水民电'],
					area:'89m²',
					position:'南',
					address:'龙华区·观澜',
					price:'3900',
					priceType:'月'
				},
				{
					imgSrc:'/static/home/house.png',
					type:'整租',
					title:'花园里32栋',
					roomType:'三室两厅',
					label:['近地铁','有电梯','民水民电'],
					area:'89m²',
					position:'南',
					address:'龙华区·观澜',
					price:'3900',
					priceType:'月'
				},
				{
					imgSrc:'/static/home/house.png',
					type:'整租',
					title:'花园里32栋',
					roomType:'三室两厅',
					label:['近地铁','有电梯','民水民电'],
					area:'89m²',
					position:'南',
					address:'龙华区·观澜',
					price:'3900',
					priceType:'月'
				},
				{
					imgSrc:'/static/home/house.png',
					type:'整租',
					title:'花园里32栋',
					roomType:'三室两厅',
					label:['近地铁','有电梯','民水民电'],
					area:'89m²',
					position:'南',
					address:'龙华区·观澜',
					price:'3900',
					priceType:'月'
				},
				{
					imgSrc:'/static/home/house.png',
					type:'整租',
					title:'花园里32栋',
					roomType:'三室两厅',
					label:['近地铁','有电梯','民水民电'],
					area:'89m²',
					position:'南',
					address:'龙华区·观澜',
					price:'3900',
					priceType:'月'
				}]
			};
		}
	}
</script>

<style lang="scss" scoped>
	@import "./home.scss";
</style>
