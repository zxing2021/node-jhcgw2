<template>
	<div class="var1">
		<div class="var2">
			<div class="var3" v-for="item1 in a1" :key="item1.id">
				<div class="var4">{{ item1.name }}</div>
				<div class="var4" v-for="item2 in a2" :key="item2.id" v-if="item1.id===item2.id2">
					<a :href="item2.link" target="_blank">{{ item2.name }}</a>
				</div>
			</div>
			<div class="var3">
				<div class="var4 hidden"></div>
				<div class="var4">
					<a-button @click="$router.replace('/admin')" size="large">
						前往管理界面
					</a-button>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import {sortedArr} from "../func/sort"
export default {
	name: "MainView",
	computed: {
		a1() {
			return sortedArr(this.$store.state.a1, 'index');
		}, a2() {
			return sortedArr(this.$store.state.a2, 'index');
		}
	}
}
</script>
<style scoped lang="less">
@primary: rgba(0, 0, 0, 0.8);
.clear() {
	&::after {
		content: "";
		display: block;
		clear: both;
	}
}
.hidden {
	visibility: hidden;
}
.var1 {
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background-color: @primary;
	overflow: auto;
}
.var2 {
	width: 64rem;
	background-color: white;
	margin: 2rem auto 0;
	border-radius: 2rem;
	padding: 3rem;
	user-select: none;
}
.var3 {
	.clear();
	border-radius: .6rem;
	overflow: hidden;
	&:nth-child(n+2) {
		margin-top: 1.2rem;
	}
	&:not(:last-of-type) {
		outline: solid @primary .1px;
	}
}
.var4 {
	float: left;
	font-size: 2.4rem;
	margin-right: .6rem;
	padding: 0 0.6rem;
	&:first-of-type {
		color: white;
		background-color: @primary;
	}
}
</style>