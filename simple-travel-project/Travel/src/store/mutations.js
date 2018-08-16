export default {
	changeCity (state,city) { // 第一个是state所有公用数据,第二个是外部传过来的数据
			state.city = city;
			try {
				localStorage.city =  city; // 使用本地存储,以防止页面刷新,数据丢失
			}catch (e) {}
	}
}