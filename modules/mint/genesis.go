package mint

import (
	"errors"
	"fmt"

	"github.com/petri-labs/petrihub/modules/mint/keeper"
	"github.com/petri-labs/petrihub/modules/mint/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

// InitGenesis new mint genesis
func InitGenesis(ctx sdk.Context, keeper keeper.Keeper, data types.GenesisState) {
	if err := ValidateGenesis(data); err != nil {
		panic(fmt.Errorf("failed to initialize mint genesis state: %s", err.Error()))
	}
	keeper.SetMinter(ctx, data.Minter)
	keeper.SetParamSet(ctx, data.Params)
}

// ExportGenesis returns a GenesisState for a given context and keeper.
func ExportGenesis(ctx sdk.Context, keeper keeper.Keeper) *types.GenesisState {
	minter := keeper.GetMinter(ctx)
	params := keeper.GetParamSet(ctx)
	return types.NewGenesisState(minter, params)
}

// ValidateGenesis performs basic validation of supply genesis data returning an
// error for any failed validation criteria.
func ValidateGenesis(data types.GenesisState) error {
	if !data.Minter.InflationBase.IsPositive() {
		return errors.New("base inflation must be positive")
	}
	return data.Params.Validate()
}
