class ResistancesController < ApplicationController

  def index
    @resistances = Resistance.all.order(created_at: :desc)
    render json: @resistances, include: {  }, only: [:id, :rep, :weight]
  end

  def create
    @resistance = Resistance.new(@resistance.to_param.as_json)
    if @resistance.save
      render json: @resistance, include: {  }, only: [:id, :reps, :weight], status: :created, location: resistances_url(@resistances, format: :json)
    else
      render json: @resistance.errors, status: :unprocessable_entity
    end
  end

  private
  def resistance_params
    params.require(:@resistance).permit(:reps ,:weight)
  end

end