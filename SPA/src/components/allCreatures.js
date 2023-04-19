var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const store_1 = require("../store");
const searchCreature_1 = __importDefault(require("./searchCreature"));
function AllCreatures() {
    const { data, isFetching } = (0, store_1.useFetchAllCreaturesQuery)(null);
    let content;
    if (isFetching) {
        content = (0, jsx_runtime_1.jsx)("div", { children: "Loading;" });
    }
    else {
        //console.log(data.results)
        content = data.results.map((creature) => {
            return (0, jsx_runtime_1.jsx)(searchCreature_1.default, { creature: creature }, creature.index);
        });
    }
    return ((0, jsx_runtime_1.jsx)("div", { children: content }));
}
exports.default = AllCreatures;
