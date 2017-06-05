const url = "";
export default {
	url: {
		/*首页*/
		index: "index.html",
	},
	dataUrl:{

	},
	setSession(val) {
		sessionStorage.setItem('apply', JSON.stringify(val))
		return val
	},
	getSession() {
		let _city = JSON.parse(sessionStorage.getItem('apply'))
		return _city
	},
	getLocation() {
		let _city = Object.assign({}, JSON.parse(localStorage.getItem('location')))
		return _city
	},
	setLocation(val) {
		localStorage.setItem('location', JSON.stringify(val))
		return val
	},
	get_storage(name) {
		let _city = JSON.parse(localStorage.getItem(name))
		return _city
	},
	set_storage(name,val) {
		localStorage.setItem(name, JSON.stringify(val))
		return val
	},
	getRequest(str) {
		let url = ''
		if (str) {
			url = str
		} else {
			url = location.href;
		}
		let theRequest = new Object();
		let href = url.split('?')[0]
		if (url.indexOf("?") != -1) {
			str = url.substr(url.indexOf("?") + 1);
			let strs = str.split("&");
			for (var i = 0; i < strs.length; i++) {
				theRequest[strs[i].split("=")[0]] = (strs[i].split("=")[1]);
			}
		}
		return {
			href: href,
			parms: theRequest
		};
	},
}
